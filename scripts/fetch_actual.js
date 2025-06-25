require('dotenv').config();  // Load env vars from .env
let api = require('@actual-app/api');

(async () => {
  await api.init({
    // Budget data will be cached locally here, in subdirectories for each file.
    dataDir: './data',
    // This is the URL of your running server
    serverURL: process.env.ACTUAL_SERVER_URL,
    // This is the password you use to log into the server
    password: process.env.ACTUAL_PASSWORD,
  });

  // This is the ID from Settings → Show advanced settings → Sync ID
  // or, if you have end-to-end encryption enabled:
  await api.downloadBudget(process.env.ACTUAL_SYNC_ID, {
    password: process.env.ACTUAL_ENCRYPTION_PASSWORD,
  });

  let budget = await api.getBudgetMonth('2025-01');
  console.log(budget);
  await api.shutdown();
})();