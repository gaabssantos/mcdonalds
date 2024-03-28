import 'dotenv/config';

import express, { json } from 'express';

import { setupMongo } from './database';
import { routes } from './routes';

setupMongo().then(() => {
  const app = express();

  app.use(json());
  app.use(routes);

  app.listen(process.env.PORT, () => {
    console.log('✨ Server has started!');
  });
});
