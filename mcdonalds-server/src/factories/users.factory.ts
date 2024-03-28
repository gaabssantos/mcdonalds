import { UserService } from '../services/users.service';

export class UserFactory {
  private static userService: UserService;

  static getServiceInstance() {
    if (this.userService) {
      return this.userService;
    }

    const service = new UserService();
    this.userService = service;

    return service;
  }
}
