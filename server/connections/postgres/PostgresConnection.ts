import { DataSource } from "typeorm";

import { staticConfig } from '../../config/static-config';

const dataSource: DataSource = new DataSource({
  type: "postgres",
  host: staticConfig.postgres.dbHost,
  port: staticConfig.postgres.dbPort,
  username: staticConfig.postgres.dbUser,
  password: staticConfig.postgres.dbPass,
  database: staticConfig.postgres.dbName
});

const postgresConnection: DataSource = await dataSource.connect();

export { postgresConnection };
