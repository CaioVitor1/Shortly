import { Router } from 'express';
import { usersData, getRanking } from '../controllers/usersController.js';
import { validateToken } from '../middlewares/validateUrl.js';


const router = Router();


router.get('/users/me', validateToken, usersData);
router.get('/ranking', getRanking);

export default router;