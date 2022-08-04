
import { Router } from 'express';
import { createShortlyUrl, getUrl } from '../controllers/urlController.js';
import { validateUrlLink  } from '../middlewares/validateUrl.js';

const router = Router();

//router.post('/signup', validateCreateUser, createUser);
router.post('/urls/shorten', validateUrlLink ,createShortlyUrl);
router.get('urls/:id', getUrl);
router.get('urls/open/:shortUrl')
export default router;