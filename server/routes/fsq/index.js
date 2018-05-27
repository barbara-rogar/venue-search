import express from 'express';

import * as fsq from './controller';

const router = express.Router();

router.get('/businesses/search', fsq.getAll);
router.get('/businesses/:businessId', fsq.getOne);

export default router;
