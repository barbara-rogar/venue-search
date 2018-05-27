import express from 'express';

import * as yelp from './controller';

const router = express.Router();

router.get('/businesses/search', yelp.getAll);
router.get('/businesses/:businessId', yelp.getOne);

export default router;
