import * as Express from 'express';
import rendererMiddleware from 'server/middlewares/renderer';
import mainController from 'server/controllers/main';

const router = Express.Router();

if (process.env.NODE_ENV === 'development') {
  const clientController = require('server/controllers/client').default;
  router.all('/client/*', clientController);
}

router.get('*', rendererMiddleware, mainController);

export default router;
