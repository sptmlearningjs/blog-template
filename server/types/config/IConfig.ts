interface IConfig {
  postgres: IPostgresData;
  mongo: IMongoData;
  appPort: number;
}

class IPostgresData {
  dbHost: string;
  dbPort: number;
  dbName: string;
  dbUser: string;
  dbPass: string;
}

class IMongoData {
  dbHost: string;
  dbPort: number;
  dbUser: string;
  dbPass: string;
}

export { IConfig, IMongoData, IPostgresData };
