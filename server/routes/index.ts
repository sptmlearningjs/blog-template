import express from 'express';
import v1 from './v1';

import { StatusCodes } from 'http-status-codes';

export default express
  .Router()
  .use('/version', (req, res) => {
    res.status(StatusCodes.OK).json({ version:'v1'});
  })
  .use('/v1', v1);
