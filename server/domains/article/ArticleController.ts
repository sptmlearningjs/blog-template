import { Request, Response } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import { ArticleService} from './ArticleService';
import { IId } from '../../types/article/IArticle';
import { Article } from '../../entities/ArticleEntity';

class ArticleController {
  private service;
  constructor(service: ArticleService) {
    this.service = service;
  }

  async getAllArticles(req: Request, res: Response): Promise<Response> {
    const articles = await this.service.getAllArticles();
    return res.status(StatusCodes.OK).json({ articles });
  }

  async getArticleById({ id }: IId, req: Request, res: Response): Promise<Response> {
    const article = await this.service.getArticleById({ id });
    if (article) {
       return res.status(StatusCodes.OK).json( { article });
    } else {
      return res.status(StatusCodes.NOT_FOUND).json({ error: ReasonPhrases.NOT_FOUND });
    }
  }

  async addArticle(data: Article, req: Request, res: Response): Promise<Response> {
    const article = await this.service.addArticle(data);
    if (article) {
      return res.status(StatusCodes.CREATED).json( { article });
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: ReasonPhrases.BAD_REQUEST });
    }
  }

  async updateArticleById(id: any, req: Request, res: Response): Promise<Response> {
    const updatedArticle = await this.service.updateArticleById({ id }, req.body.data);
    if (updatedArticle) {
      return res.status(StatusCodes.OK).json( { updatedArticle });
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: ReasonPhrases.BAD_REQUEST });
    }
  }

  async deleteArticleById(id: any, req: Request, res: Response): Promise<Response> {
    await this.service.deleteArticleById({ id });
    return res.status(StatusCodes.NO_CONTENT);
  }
}

export { ArticleController };
