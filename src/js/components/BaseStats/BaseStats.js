// @flow
import React, { Component, PropTypes } from 'react';

import ChannelStats from '../ChannelStats';
import Toolbar from '../../containers/ToolbarContainer';

import css from './BaseStats.css';

class BaseStats extends Component {
    static propTypes = {
        getTeam: PropTypes.func.isRequired,
        channels: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired
            })
        ).isRequired
    }
    constructor() {
        super();
        this.renderStats = this.renderStats.bind(this);
    }
    componentWillMount() {
        const { getTeam } = this.props;
        getTeam('clai');
    }
    renderStats() {
        const { channels } = this.props;
        // group data by channel
        const groupedChannels = [...channels.map(channel =>
            ({ name: channel.name, data: channel }))
        ]
        return groupedChannels.map(channel =>
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
                <div className={css.toolbar}>
                    <Toolbar />
                </div>
                <div className={css.statsGrid}>
                    {this.renderStats()}
                </div>
            </div>
        );
    }
}

export default BaseStats;
