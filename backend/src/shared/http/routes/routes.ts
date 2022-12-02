import { Router } from 'express';
import { ensureAuthenticateUser } from '../../../middleware/ensureAuthenticateUser';
import { storeListRoutes } from '../../../modules/stores/routes/listStore.routes';
import { storeRoutes } from '../../../modules/stores/routes/store.routes';
import { sessionRouter } from '../../../modules/user/routes/session.routes';
import { userRouter } from '../../../modules/user/routes/user.routes';
import { userProfileRouter } from '../../../modules/user/routes/userProfile.routes';

export const routes = Router();

routes.use('/users', userRouter);
routes.use('/session', sessionRouter);
routes.use('/profile', ensureAuthenticateUser, userProfileRouter);
routes.use('/store', ensureAuthenticateUser, storeRoutes);
routes.use('/store', ensureAuthenticateUser, storeListRoutes);

