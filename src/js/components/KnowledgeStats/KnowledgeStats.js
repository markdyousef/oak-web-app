// @flow
import React, { Component, PropTypes } from 'react';

import css from './KnowledgeStats.css';

class KnowledgeStats extends Component {
    static propTypes = {};
    static defaultProps = {};
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                KNOWLEDGESTATS
            </div>
        );
    }
}

export default KnowledgeStats;
