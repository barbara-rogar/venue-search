import * as fsq from '../../app/fsq/businesses';

function getAll(req, res) {
    const expressQuery = req.query,
        params = {
            ll: expressQuery.location,
            radius: expressQuery.radius || 500,
            query: expressQuery.query
        };

    return fsq.findAll(params)
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

    return fsq.findOne({businessId})
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
};
