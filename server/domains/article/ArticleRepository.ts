import { DataSource, UpdateResult, DeleteResult } from 'typeorm';

import { Article } from '../../entities/ArticleEntity';
import { IId } from '../../types/article/IArticle';
class ArticleRepository {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async getAllArticles(): Promise<Article[]> {
    return this.dataSource.manager.find(Article);
  }

  async getArticleById({ id }: IId): Promise<Article|null> {
    return this.dataSource.manager.findOneById(Article, id)
  }

  async addArticle(data: Article): Promise<Article> {
    return this.dataSource.manager.create(Article, data);
  }

  async updateArticleById({ id }: IId, data: Partial<Article>): Promise<UpdateResult> {
    return this.dataSource.manager.update(Article, id, data);
  }

  async deleteArticleById({ id }: IId): Promise<DeleteResult> {
    return this.dataSource.manager.delete(Article, id);
  }
}

export { ArticleRepository };
