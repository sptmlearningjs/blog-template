import { Router } from 'express';

import { articleController } from '../main';

const articleRouter =  Router()
  .get('/articles', articleController.getAllArticles)
  .get('/articles/:id', articleController.getArticleById)
  .post('/articles', articleController.addArticle)
  .put('/articles/:id', articleController.updateArticleById)
  .delete('/articles/:id', articleController.deleteArticleById);

export { articleRouter };

