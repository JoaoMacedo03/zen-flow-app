import { ZendeskProvider } from '@coaktion/zendesk-clients-react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import MainApp from './main-app';
import './presentation/styles/global.scss';
import './presentation/translations';
import sentryInit from './plugins/sentry';

sentryInit();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const client = ZAFClient.init();
client.on('app.registered', async (data: { context: any; metadata: any }) => {
  const root = document.getElementById('root');
  if(!root) {
    return;
  }

  ReactDOM.createRoot(root).render(
      <ZendeskProvider>
        <MainApp
          zendesk={client}
          settings={data.metadata.settings}
          location={data.context.location}
        />
      </ZendeskProvider>
  );
});
