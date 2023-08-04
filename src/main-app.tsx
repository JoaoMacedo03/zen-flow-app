import { MakeBaseComponent, useZendesk } from '@coaktion/zendesk-clients-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Settings } from './interfaces';
import routes from './routes';

interface props {
  zendesk: any;
  location: keyof typeof routes;
  settings: Settings;
}
const MainApp: React.FC<props> = ({ zendesk, location, settings }: props) => {
  const { i18n } = useTranslation();
  const { setZendesk } = useZendesk();
  const [intialState, setintialStateLoading] = useState({
    loading: true
  });

  useEffect(() => {
    setintialStateLoading({ loading: false });
    setZendesk(zendesk);
    i18n.changeLanguage(settings.language);
  }, []);

  if (intialState.loading) return <div>Loading...</div>;

  return <MakeBaseComponent {...routes[location]} settings={settings} />;
};

export default MainApp;
