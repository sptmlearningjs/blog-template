import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

import { IArticle } from '../types/article/IArticle';

@Entity()
class Article extends BaseEntity implements IArticle  {

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
}

export { Article };
