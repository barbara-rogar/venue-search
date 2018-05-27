import axios from 'axios';

import config from '../../config';

const fsqConfig = {
    client_id: config.fsq.client_id,
    client_secret: config.fsq.client_secret,
    v: config.fsq.v
};

function findAll(params) {
    const url = `${config.fsq.baseUrl}/${config.fsq.version}/venues/search`,
        xhrConfig = {
            params: Object.assign(params, fsqConfig)
        };

    return axios.get(url, xhrConfig);
}

function findOne(params) {
    const url = `${config.fsq.baseUrl}/${config.fsq.version}/venues/${params.businessId}`,
        xhrConfig = {
            params: Object.assign(params, fsqConfig)
        };

    return axios.get(url, xhrConfig);
}

export {
    findAll,
    findOne
};
