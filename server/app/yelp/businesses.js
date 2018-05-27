import axios from 'axios';

import config from '../../config';

const xhrConfig = {
    headers: {
        'Authorization': config.yelp.api_key
    }
};

function findAll(params) {
    const url = `${config.yelp.baseUrl}/${config.yelp.version}/businesses/search`;

    xhrConfig.params = params;

    return axios.get(url, xhrConfig);
}

function findOne(params) {
    const url = `${config.yelp.baseUrl}/${config.yelp.version}/businesses/${params.businessId}`;

    return axios.get(url, xhrConfig);
}


export {
    findAll,
    findOne
};
