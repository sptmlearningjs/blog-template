import { ObjectID } from 'typeorm'

interface IArticle {
  id: number;
  name: string;
  description: string;
}

interface IId {
  id: string | number | Date | ObjectID;
}

export { IArticle, IId };
