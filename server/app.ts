import "reflect-metadata";
import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000, () => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});
