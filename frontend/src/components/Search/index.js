import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';

import geolocate from '../../helpers/geolocation';
import config from '../../config';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasSubmit: typeof this.props.submitFunction === 'function'
        };

        this.submitHandler = this.submitHandler.bind(this);
    }

    getLocation() {
        // Search for places nearby
        return geolocate(config.geolocation)
            .then(({coords}) => {
                return `${coords.latitude.toFixed(6)},${coords.longitude.toFixed(6)}`;
            })
            .catch((err) => {
                console.error(err.message);
            });
    }

    submitHandler(e) {
        e.preventDefault();

        const newQuery = e.target.elements.term.value.trim();

        this.getLocation().then(coordinateString => {
            const params = {
                query: newQuery,
                location: coordinateString
            };

            if (this.state.hasSubmit) {
                this.props.submitFunction(params.location, params.query);
            }

            this.props.history.push(`/businesses/search?${queryString.stringify(params)}`);
        });
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.submitHandler} className="search-form">
                    <input type="text"
                           placeholder="What?"
                           defaultValue={this.props.query}
                           name="term"
                           className="search-form__query"/>
                    <input type="submit" value="Search" className="search-form__submit"/>
                </form>
            </div>
        );
    }
}

export default withRouter(Search);
