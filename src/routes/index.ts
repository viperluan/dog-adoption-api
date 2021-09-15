import Router from 'express';

import { appErrorHandling } from '../middlewares/appErrorHandling';
import { adoptionDogRoutes } from './adoption-dog.routes';
import { adoptionRoutes } from './adoption.routes';
import { dogRoutes } from './dog.routes';
import { institutionRoutes } from './institution.routes';
import { userRoutes } from './user.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/institution', institutionRoutes);
router.use('/adoption', adoptionRoutes);
router.use('/dog', dogRoutes);
router.use('/adoption-dog', adoptionDogRoutes);

router.use(appErrorHandling);

export { router };
