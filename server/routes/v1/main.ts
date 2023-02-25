import { ArticleRepository} from '../../domains/article/ArticleRepository';
import { ArticleService } from '../../domains/article/ArticleService';
import { ArticleController } from '../../domains/article/ArticleController';

// import { postgresConnection} from '../../connections/postgres/PostgresConnection';
import { mongoConnection} from '../../connections/mongo/MongoConnection';

const dataSource = await mongoConnection;

// create repos
const articleRepository = new ArticleRepository(dataSource);

// create services
const articleService = new ArticleService(articleRepository);

// create controllers

const articleController = new ArticleController(articleService);


// export ready-to-use-controllers
export { articleController };
