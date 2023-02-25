import { Request, Response } from 'express';

const passBodyToMethod = (req: Request, res: Response, next: Function) => {
  res.send(req.body.data);
  next();
}

export { passBodyToMethod };
