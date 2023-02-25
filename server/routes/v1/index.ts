import { Router } from 'express';

import { articleRouter} from './articles/ArticleRouter';

export default Router()
  .use('/articles', articleRouter);
