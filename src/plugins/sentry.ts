/* eslint-disable no-console */
import * as Sentry from '@sentry/react';

const sentryInit = () => {
  try {
    Sentry.init({
      dsn: '',
      integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
      tracesSampleRate: 0.5,
      replaysOnErrorSampleRate: 0.8,
    });
  } catch (e) {
    console.error('Error init sentry:', e);
  }
};

export default sentryInit;