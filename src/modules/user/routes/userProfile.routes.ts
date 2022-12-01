import { Router } from 'express';
import { UserProfileController } from '../useCases/userProfile/UserProfileController';


export const userProfileRouter = Router();
const userprofileController = new UserProfileController();

userProfileRouter.get('/', userprofileController.handle);

