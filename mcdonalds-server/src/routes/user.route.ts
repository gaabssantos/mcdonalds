import { Router } from 'express';

import { UserController } from '../controllers/users.controller';

export const userRoute = Router();

const controller = new UserController();

userRoute.post('/', controller.create);
