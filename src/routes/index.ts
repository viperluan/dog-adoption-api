import Router from 'express';

import { appErrorHandling } from '../middlewares/appErrorHandling';
import { userRoutes } from './user.routes';

const router = Router();

router.use('/user', userRoutes);

router.use(appErrorHandling);

export { router };
