import { Router } from 'express';
import { getDenuncias, postDenuncias } from '../controllers';

const router = Router();

router
  .get('/', getDenuncias)
  .post('/', postDenuncias);

export default router;
