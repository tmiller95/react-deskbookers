import React, { Component } from 'react';
import axios from 'axios';

import './SearchResults.css';
import Map from '../../components/Map/Map';
import List from '../../components/List/List';

class SearchResults extends Component {
    state = {
        results: [],
        resultsCount: 0,
        searchTerm: '',
        coordinates: {}
    }

    componentDidMount() {
        // Fetch the search results
        axios.get('https://www.deskbookers.com/nl-nl/explore/ajax.json?q=utrecht')
            .then(response => {
                const data = response.data;

                const results = data.rows;
                const resultsCount = data.pagination.total;

                // Fetch and capitalize the search term
                const searchTerm = data.filters.bounds.charAt(0).toUpperCase() + data.filters.bounds.substr(1);

                // Calculate coordinates to center the map on
                const lat = (data.bounds.n + data.bounds.s) / 2;
                const lng = (data.bounds.e + data.bounds.w) / 2;

                this.setState({
                    results: results,
                    resultsCount: resultsCount,
                    searchTerm: searchTerm,
                    coordinates: {
                        lat: lat,
                        lng: lng
                    }
                });
            })
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        return (
            <div className="searchResults-container">
                <List
                    results={this.state.results}
                    resultsCount={this.state.resultsCount}
                    searchTerm={this.state.searchTerm} />
                <Map
                    results={this.state.results}
                    coordinates={this.state.coordinates} />
            </div>
        )
    }
}

export default SearchResults;