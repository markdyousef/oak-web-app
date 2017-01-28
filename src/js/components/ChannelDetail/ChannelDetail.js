// @flow
import React, { Component, PropTypes } from 'react';

import css from './ChannelDetail.css';

class ChannelDetail extends Component {
    static propTypes = {
        data: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    };
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <div className={css.container}>
                CHANNEL
            </div>
        );
    }
}

export default ChannelDetail;
