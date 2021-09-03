import Router from 'express';

import { appErrorHandling } from '../middlewares/appErrorHandling';
import { adoptionRoutes } from './adoption.routes';
import { institutionRoutes } from './institution.routes';
import { userRoutes } from './user.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/institution', institutionRoutes);
router.use('/adoption', adoptionRoutes);

router.use(appErrorHandling);

export { router };
