import { Router } from 'express';

import { baseRoute } from './base.route';
import { userRoute } from './user.route';

export const routes = Router();

routes.use('/', baseRoute);
routes.use('/users', userRoute);
