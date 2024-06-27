import { Controller } from 'egg';

class BaseController extends Controller {
  success(data: any) {
    this.ctx.body = {
      data,
      status: 0,
      success: true,
    };
  }
  error(error: string) {
    this.ctx.body = {
      data: null,
      status: -1,
      success: false,
      message: error || 'Error',
    };
  }
}

export default BaseController;
