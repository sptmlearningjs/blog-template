import { IConfig} from '../types/config/IConfig';

const staticConfig: IConfig = {
  postgres: {
    dbHost: process.env.POSTGRES_DB_HOST || 'postgres',
    dbPort: Number(process.env.POSTGRES_DB_PORT) || 5432,
    dbName: process.env.POSTGRES_DB_NAME || 'test_app_db',
    dbUser: process.env.POSTGRES_DB_USERNAME || 'postgres',
    dbPass: process.env.POSTGRES_DB_PASSWORD || 'postgres',
  },
  mongo: {
    dbHost: process.env.MONGO_HOST || 'mongo',
    dbPort: Number(process.env.MONGO_PORT) || 27017,
    dbUser: process.env.MONGO_USERNAME || 'root',
    dbPass: process.env.MONGO_PASSWORD || 'rootpassword',
  },
  appPort: Number(process.env.APP_PORT),
}

export { staticConfig };
