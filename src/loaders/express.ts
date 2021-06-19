import { Application, NextFunction, Request, Response } from 'express';
import Logger from '../shared/utils/logger/index';
import routes from '../api';
import cors from 'cors';
import config from '../config';
import expressRequestId from 'express-request-id';
import requestLogger from '../shared/utils/logger/loggers/RequestLogger';

export default (app: Application) => {
  app.get('/status', (req: Request, res: Response) => {
    res.status(200).send('It Works Fine');
  });

  app.use(expressRequestId());
  app.use(requestLogger);
  app.use(cors());
  app.use(routes());

  /// catch 404 and forward to error handler
  app.use((req: Request, res: Response, next: NextFunction) => {
    const err = new Error('Not Found');
    next(err);
  });

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
  app
    .listen(config.PORT, () => {
      Logger.log(`🛡️ User Server listening on port: ${config.PORT} 🛡️`);
    })
    .on('error', (err) => {
      Logger.error(err);
      process.exit(1);
    });
};
