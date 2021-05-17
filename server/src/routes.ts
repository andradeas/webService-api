import { Router } from 'express';

import RegistersController from './controllers/RegistersController';

const routes = Router();

routes.post('/register', RegistersController.create);
routes.post('/register', RegistersController.dados);
routes.get('/register', RegistersController.index);
routes.get('/register/:id', RegistersController.show);
routes.put('/register/:id', RegistersController.update);
routes.delete('/register/:id', RegistersController.delete);


export default routes;