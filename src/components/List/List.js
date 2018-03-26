import React from 'react';
import * as _ from 'lodash';

import './List.css';
import ListItem from '../../components/ListItem/ListItem';

const list = (props) => {
    // If loaded, show results
    if (props.results.length > 0) {
        return (
            <div className="list-container">
                <div className="list-header"><span className="bold">{props.resultsCount}</span> spaces found in <span className="bold">{props.searchTerm}</span></div>
                <div className="row">
                    {_.map(props.results, function (result) {
                        return (
                            <ListItem result={result} key={result.id} />
                        )
                    })}
                </div>
            </div>
        )

    // If still loading, show spinner
    } else {
        return (
            <div className="list-container">
                <div className="list-loading">
                    <span class="fa fa-spin fa-fw fa-refresh"></span>&nbsp;Searching...
            </div>
            </div>
        )
    }

};

export default list;