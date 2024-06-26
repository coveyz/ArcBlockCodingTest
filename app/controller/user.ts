import BaseController from './base';

class UserController extends BaseController {
  async getUserInfo() {
    const info = {
      userName: '123',
    };

    this.success(info);
  }
}

export default UserController;
