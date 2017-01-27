// @flow
import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import css from './BaseStats.css';

class BaseStats extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired
            })
        ).isRequired
    }
    constructor() {
        super();
        this.renderStats = this.renderStats.bind(this);
        this.state = {};
    }
    renderStats() {
        const { data } = this.props;

        // group data by channel
        const channels = data.map(channel => channel.name);
        const stats = _.zipObject(channels, data);
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
