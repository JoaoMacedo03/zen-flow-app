import { SidebarState } from '@/interfaces';
import { t } from 'i18next';
import { object, string } from 'yup';

type Props = {
  state: SidebarState;
};

export const validationGithub = async ({ state }: Props): Promise<string> => {
  try {
    const githubSchema = object({
      githubUser: string()
        .required(t('presentation.apps.sidebar.validation.required') || '')
        .min(3, t('presentation.apps.sidebar.validation.min') || '')
    });
    await githubSchema.validate(state);
    return '';
  } catch (error: any) {
    return error.message;
  }
};
