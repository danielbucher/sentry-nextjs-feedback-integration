### Reproducing the error

Change org and project under `next.config.js` and `dsn` under sentry files.

```
npm install
npm run dev
```

Go to http://localhost:3000/sentry-example-page. You should see the error in your server's console.
