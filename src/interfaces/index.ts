import {
  type GitHubUserModel,
  type GitHubUserReposModel
} from '@/models/github-models';
import { ZendeskTicketsClient } from '@coaktion/zendesk-clients-react';

type GithubUserDataModel = {
  user: GitHubUserModel;
  repositories: GitHubUserReposModel[];
};

export type SidebarState = {
  githubUser: string;
  error: string;
  userFound: boolean;
  githubUserData: GithubUserDataModel;
};

export type Settings = {
  github_base_url: string;
  language: string;
  repo_description_id: string;
  repo_language_id: string;
  base_url: string;
};

export type BaseComponentProps = {
  settings: Settings;
};

export type SidebarProps = BaseComponentProps & {
  tickets: ZendeskTicketsClient;
};
