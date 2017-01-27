import React, { Component, PropTypes } from 'react';

import css from './Graph.css';

class Graph extends Component {
    static propTypes = {
        data: PropTypes.shape({
            x: PropTypes.arrayOf(PropTypes.string).isRequired,
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
            </div>
        );
    }
}

export default Graph;
