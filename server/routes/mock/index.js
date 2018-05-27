import express from 'express';

// Foursquare mocks
import searchMockDataFsq from '../../mocks/fsq-explore.json';
import detailMockDataFsq from '../../mocks/fsq-detail.json';

// Yelp mocks
import searchMockDataYelp from '../../mocks/yelp-search.json';
import detailMockDataYelp from '../../mocks/yelp-detail.json';

const router = express.Router();

// Foursquare
router.get('/fsq/businesses/search', (req, res) => {
    res.json(searchMockDataFsq);
});

router.get('/fsq/businesses/:businessId', (req, res) => {
    res.json(detailMockDataFsq);
});


// Yelp
router.get('/yelp/businesses/search', (req, res) => {
    res.json(searchMockDataYelp);
});

router.get('/yelp/businesses/:businessId', (req, res) => {
    res.json(detailMockDataYelp);
});

export default router;
