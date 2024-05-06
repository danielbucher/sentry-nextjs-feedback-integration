// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "change me",
  tracesSampleRate: 1,
  debug: false,
  integrations: [
    Sentry.feedbackIntegration({
      autoInject: false,
    }),
  ],
});
