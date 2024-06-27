import BaseController from './base';

class UserController extends BaseController {
  async getUserInfo() {
    const user = await this.ctx.model.User.findByPk(1);
    this.success(user);
  }

  async updateUserInfo() {
    try {
      const { ctx } = this;
      const userData = ctx.request.body; // 假设更新数据从请求体中获取


      // 查找要更新的用户
      const user = await ctx.model.User.findByPk(userData.id || 1);
      if (!user) {
        this.error('当前用户不存在');
        return;
      }

      // 更新用户信息
      await user.update(userData);

      this.success('用户更新成功');
    } catch (err: any) {
      this.error(err.message);
    }
  }
}

export default UserController;
