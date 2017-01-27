import React, { Component, PropTypes } from 'react';

import css from './Graph.css';

class Graph extends Component {
    static propTypes = {
        data: PropTypes.shape({
            x: PropTypes.arrayOf(PropTypes.object).isRequired,
            y: PropTypes.arrayOf(PropTypes.object).isRequired
        })
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                Graph
            </div>
        );
    }
}

export default Graph;
