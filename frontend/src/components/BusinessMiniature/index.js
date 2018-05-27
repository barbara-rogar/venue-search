import React from 'react';
import {Link} from 'react-router-dom';

function BusinessMiniature(props) {
    return (
        <Link to={`/businesses/${props.business.id}`} className="business-miniature">
            <h2>{props.business.name}</h2>
            <h3>{props.business.location.address1}</h3>
            <p>Rating: {props.business.rating}</p>
            <img src={props.business.image_url} alt="" className="business-miniature__img"/>
        </Link>
    );
}

export default BusinessMiniature;
