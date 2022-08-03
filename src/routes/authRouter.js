import {  createUser, loginUser } from '../controllers/authController.js';
import { validateCreateUser, validateLogin } from '../middlewares/validateUser.js';
import { Router } from 'express';

const router = Router();

router.post('/signup', validateCreateUser, createUser);
router.post('/signin', validateLogin, loginUser);

export default router;