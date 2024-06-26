import { Controller } from 'egg';

class BaseController extends Controller {
  success(data: any) {
    this.ctx.body = {
      data,
      status: 0,
      success: true,
    };
  }
}

export default BaseController;
