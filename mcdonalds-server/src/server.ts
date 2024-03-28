import 'dotenv/config';

import express, { json } from 'express';

import { routes } from './routes';

const app = express();

app.use(json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('✨ Server has started!');
});
