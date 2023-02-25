import { UpdateResult, DeleteResult } from 'typeorm';

import { ArticleRepository } from './ArticleRepository';
import { Article } from '../../entities/ArticleEntity';
import { IId } from '../../types/article/IArticle';

class ArticleService {
  private repository: ArticleRepository
  constructor(repository: ArticleRepository) {
    this.repository = repository;
  }

  async getAllArticles(): Promise<Article[]> {
    return this.repository.getAllArticles();
  }

  async getArticleById({ id }: IId): Promise<Article|null> {
    return this.repository.getArticleById({ id })
  }

  async addArticle(data: Article): Promise<Article> {
    return this.repository.addArticle(data);
  }

  async updateArticleById({ id }: IId, data: Partial<Article>): Promise<UpdateResult> {
    return this.repository.updateArticleById({ id }, data);
  }

  async deleteArticleById({ id }: IId): Promise<DeleteResult> {
    return this.repository.deleteArticleById({ id });
  }
}

export { ArticleService };
