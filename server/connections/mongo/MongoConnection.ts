import { DataSource } from "typeorm";

import { staticConfig } from '../../config/static-config';

const dataSource: DataSource = new DataSource({
  type: "mongodb",
  host: staticConfig.mongo.dbHost,
  port: staticConfig.mongo.dbPort,
  username: staticConfig.mongo.dbUser,
  password: staticConfig.mongo.dbPass,
});

const mongoConnection: DataSource = await dataSource.connect();

export { mongoConnection };

