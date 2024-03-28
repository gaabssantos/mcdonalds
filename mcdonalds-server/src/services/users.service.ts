import { UserDTO } from '../dtos/users.dto';
import { User } from '../entities/users.entity';

export class UserService {
  async create({ name, email, password, admin }: UserDTO): Promise<User> {
    const user = new User({
      name,
      email,
      password,
      admin,
    });

    return user;
  }
}
