
import { Router } from 'express';
import { createShortlyUrl, deleteUrl, getUrl, visitUrl } from '../controllers/urlController.js';
import { validateUrlLink, validateToken  } from '../middlewares/validateUrl.js';

const router = Router();

router.post('/urls/shorten', validateToken, validateUrlLink ,createShortlyUrl);
router.get('/urls/:id', getUrl);
router.get('/urls/open/:shortUrl', visitUrl)
router.delete('/urls/:id', validateToken, deleteUrl)
export default router;