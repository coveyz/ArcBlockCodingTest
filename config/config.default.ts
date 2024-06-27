import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1719420733488_9568';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.sequelize = {
    dialect: 'sqlite',
    storage: 'database.sqlite', // SQLite 的存储文件
    define: {
      timestamps: false, // 关闭自动添加时间戳
    },
  };

  // 跨域
  config.cors = {
    origin: '*',
    allowMethods: [ 'GET', 'POST' ],
  };

  config.security = {
    csrf: {
      enable: false, // 禁用 CSRF 防护，方便开发调试
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
