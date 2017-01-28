// @flow
import React, { Component, PropTypes } from 'react';

import css from './MessageStats.css';

class MessageStats extends Component {
    static propTypes = {};
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                MESSAGES
            </div>
        );
    }
}

export default MessageStats;
