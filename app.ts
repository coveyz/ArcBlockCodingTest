import type { Application } from 'egg';

module.exports = (app: Application) => {
  app.beforeStart(async () => {
    try {
      // 同步数据库表格
      await app.model.sync({ force: false }); // 设置 force: true 可以删除已有表格，小心使用
      const { User } = app.model;
      // 检查是否已经存在默认用户
      const existingUser = await User.findOne({ where: { name: 'default_username' } });
      if (!existingUser) {
        // 创建默认用户
        await User.create({
          name: 'default_username',
          email: 'default@example.com',
          phone: '13000000000',
        });

        app.logger.info('Default user created successfully.');
      }
    } catch (err) {
      app.logger.error('Failed to create default user:', err);
    }
  });
};
