import { type BaseComponentProps, type Settings } from '@/interfaces';

const settingsMock = {
  language: 'en',
  repo_description_id: '123',
  repo_language_id: '123'
} as Settings;

export const baseComponentMock = (): BaseComponentProps => {
  return {
    settings: settingsMock
  };
};
