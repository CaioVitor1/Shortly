import { Router } from 'express';
import { usersData } from '../controllers/usersController.js';
import { validateToken } from '../middlewares/validateUrl.js';


const router = Router();


router.get('/users/me', validateToken, usersData);

export default router;