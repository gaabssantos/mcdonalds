import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { UserService } from '../services/users.service';

export class UserController {
  async create(req: Request, res: Response) {
    const service = new UserService();

    const { name, email, password, admin } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    console.log(passwordHash);

    const user = await service.create({
      name,
      email,
      password: passwordHash,
      admin,
    });

    return res.status(StatusCodes.CREATED).json(user);
  }
}
