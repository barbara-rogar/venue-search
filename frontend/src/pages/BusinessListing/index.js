import React, {Component} from 'react';
import queryString from 'query-string';
import axios from 'axios';

import BusinessMiniature from '../../components/BusinessMiniature';
import Search from '../../components/Search';

const renderBusinessList = (business) => (
    <div className="business-list__item">
        <BusinessMiniature business={business} key={business.id}/>
    </div>
);

class BusinessListing extends Component {
    constructor(props) {
        super(props);

        const initialValues = queryString.parse(this.props.location.search) || {};

        this.state = {
            businesses: [],
            query: initialValues.query || '',
            location: initialValues.location || ''
        };

        this.updateSearchParameters = this.updateSearchParameters.bind(this);
    }

    updateSearchParameters(location, query) {
        this.setState({
            businesses: [],
            query: query,
            location: location
        });

        this.getList();
    }

    getList() {
        const url = '/yelp/businesses/search';

        return axios.get(url, {
            params: {
                location: this.state.location,
                query: this.state.query
            }
        })
        .then(response => {

            this.setState({
                businesses: response.data.businesses
            });

        })
        .catch(err => {
            console.log(err)
        });
    }

    componentDidMount() {
        this.getList();
    }

    // Extract BusinessListing in a standalone component
    // which will be callable from DetailPage, Search page or anywhere else
    render() {
        return (
            <div className="business-listing">
                <h1>Business listing</h1>
                <Search query={this.state.query} submitFunction={this.updateSearchParameters}/>
                <div className="business-list">
                    {this.state.businesses.map(business => renderBusinessList(business))}
                </div>
            </div>
        );
    }
}

export default BusinessListing;
