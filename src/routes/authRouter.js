import {  createUser } from '../controllers/authController.js';
import { validateUser } from '../middlewares/validateUser.js';
import { Router } from 'express';

const router = Router();

router.post('/signup', validateUser, createUser);
//router.post('/signin', loginUser);

export default router;