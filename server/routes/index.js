import express from 'express';

import yelpRoutes from './yelp';
import fsqRoutes from './fsq';

import mockRoutes from './mock';

const router = express.Router();

// Routes
router.use('/yelp', yelpRoutes);
router.use('/fsq', fsqRoutes);


// Mock routes
router.use('/mock', mockRoutes);

export default router;
