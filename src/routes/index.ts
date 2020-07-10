import { Router } from 'express';
import artistRouter from './artist.routes';
import userRouter from './user.routes';

const routes = Router();

routes.use('/artist', artistRouter);
routes.use('/user', userRouter);

export default routes;
