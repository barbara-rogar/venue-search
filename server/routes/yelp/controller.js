import * as yelp from '../../app/yelp/businesses';

function getAll(req, res) {
    const expressQuery = req.query,
        radius = expressQuery.radius || 500,
        [latitude, longitude] = expressQuery.location.split(','),
        params = {
            longitude, latitude, radius, term: expressQuery.query
        };

    return yelp.findAll(params)
        .then(response => {
            return response.data;
        })
        .then((response) => {
            res.json(response);
        })
        .catch(error => {
            console.log(error);
        });
}

function getOne(req, res) {
    const {businessId} = req.params;

    return yelp.findOne({businessId})
        .then(response => {
            return response.data;
        })
        .then((response) => {
            res.json(response);
        })
        .catch(error => {
            console.log(error);
        });
}

export {
    getAll,
    getOne
}
