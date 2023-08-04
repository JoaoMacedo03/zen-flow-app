import { SidebarProps, SidebarState } from '@/interfaces';
import { GitHubUserModel, GitHubUserReposModel } from '@/models/github-models';
import { ErrorMessage } from '@/presentation/components';
import { GithubClient } from '@coaktion/aktie-clients';
import { Button, CircularProgress, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import GithubUserData from './github-user-data';
import './sidebar.scss';
import { validationGithub } from './validation';

const Sidebar: React.FC<SidebarProps> = ({
  tickets,
  settings
}: SidebarProps) => {
  const githubClient = new GithubClient(settings.github_base_url);
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<SidebarState>({
    githubUser: '',
    error: '',
    userFound: false,
    githubUserData: {
      user: {} as GitHubUserModel,
      repositories: []
    }
  });

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const hasError = await validationGithub({ state });
    if (hasError) {
      setState((current) => ({ ...current, error: hasError }));
      return;
    }

    setLoading(true);

    try {
      const { data } = await githubClient.fetch(state.githubUser);
      const user = data as GitHubUserModel;
      const { data: dataRepositories } = await githubClient.getRepositories(
        user.repos_url
      );
      const repositories = dataRepositories as GitHubUserReposModel[];

      setState((current) => ({
        ...current,
        userFound: true,
        githubUserData: { user, repositories }
      }));
      setLoading(false);
    } catch (error: any) {
      setState((current) => ({
        ...current,
        error: error.message || t('presentation.apps.sidebar.default-error')
      }));
      setLoading(false);
    }
  };

  useEffect(() => {
    tickets.resizeFrame();
  }, []);

  if (state.userFound) {
    return (
      <GithubUserData
        setState={setState}
        sidebarState={state}
        zendesk={tickets}
        settings={settings}
      />
    );
  }

  return (
    <form
      data-testid="sidebarWrap"
      onSubmit={handleSubmit}
      className="sidebarWrap"
    >
      <TextField
        variant="outlined"
        data-testid="sidebar-input"
        inputProps={{ 'data-testid': 'content-input' }}
        name="githubuser"
        label={t('presentation.apps.sidebar.label')}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setState((current) => ({
            ...current,
            githubUser: event.target.value,
            error: ''
          }));
        }}
        fullWidth
      />
      {state.error && <ErrorMessage error={state.error} />}
      <Button data-testid="sidebar-button" type="submit" variant="contained">
        {loading ? (
          <CircularProgress data-testid="sidebar-spinner" size={30} />
        ) : (
          <>{t('presentation.apps.sidebar.button')}</>
        )}
      </Button>
    </form>
  );
};

export default Sidebar;
