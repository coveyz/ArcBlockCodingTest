import 'egg';
import { Sequelize, Model } from 'sequelize';

declare module 'egg' {
  interface IModel {
    User: ReturnType<typeof import('../app/model/user').default>;
  }

  interface Application {
    model: IModel & Sequelize;
  }
}
