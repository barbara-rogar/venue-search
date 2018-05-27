import React, {Component} from 'react';
import axios from "axios";

class BusinessDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: {}
        }
    }

    componentDidMount() {
        this.getData(this.props.match.params.id);
    }

    getData(id) {
        const url = `/yelp/businesses/${id}`;

        return axios.get(url)
            .then(response => {
                this.setState({
                    details: response.data,
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return (
            <div className="business-detail">
                <h1>{this.state.details.name}</h1>
                <p>Price range: {this.state.details.price}</p>
                <img src={this.state.details.image_url} alt="" className="business-detail__img"/>
            </div>
        );
    }
}

export default BusinessDetail;
