// @flow
import React, { Component, PropTypes } from 'react';

import ChannelStats from '../ChannelStats';

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
    }
    renderStats() {
        const { data } = this.props;

        // group data by channel
        const channels = [...data.map(channel =>
            ({ name: channel.name, data: channel }))
        ]

        return channels.map(channel =>
            <ChannelStats
                key={channel.name}
                data={channel.data}
                name={channel.name}
                id={channel.id}
            />
            );
    }
    render() {
        return (
            <div className={css.container}>
                <div className={css.statsGrid}>
                    {this.renderStats()}
                </div>
            </div>
        );
    }
}

export default BaseStats;
