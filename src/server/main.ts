import * as path from 'path';
import * as Express from 'express';
import routes from 'server/routes/main';

const app = Express();

if (process.env.NODE_ENV === 'production') {
  app.use('/client', Express.static(path.join(__dirname, 'client')));
}

app.use('/', routes);

export default app;
