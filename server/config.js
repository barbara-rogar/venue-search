import dotenv from 'dotenv';

dotenv.config();

export default {
    express: {
        port: process.env.EXPRESS_PORT || 3000,
        ip: 'localhost'
    },
    yelp: {
        api_key: process.env.YELP_API_KEY,
        baseUrl: 'https://api.yelp.com',
        version: 'v3'
    },
    fsq: {
        client_id: process.env.FOURSQUARE_CLIENT_ID,
        client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
        baseUrl: 'https://api.foursquare.com',
        version: 'v2',
        v: '20180505'
    }
};
