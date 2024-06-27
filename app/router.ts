import type { Application } from 'egg';

module.exports = (app: Application) => {
  const { router, controller } = app;
  router.get('/getUserInfo', controller.user.getUserInfo);
  router.post('/updateUserInfo', controller.user.updateUserInfo);
};
