import React, { Component } from 'react';

import css from './BaseStats.css';

class BaseStats extends Component {
    constructor() {
        super();
        this.renderStats = this.renderStats.bind(this);
        this.state = {};
    }
    props: {
        data: Object
    }
    renderStats() {
        const { data } = this.props;
        return data;
    }
    render() {
        return (
            <div className={css.container}>
                {this.renderStats()}
            </div>
        );
    }
}

export default BaseStats;
