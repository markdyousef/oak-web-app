// @flow
import React, { Component, PropTypes } from 'react';
import KnowledgeStats from '../../components/KnowledgeStats';
import Collections from '../../components/Collections';
import TopNav from '../../components/TopNav';

import css from './Home.css';

class Home extends Component {
    static propTypes = {};
    static defaultProps = {};
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                <TopNav />
                <div className={css.stats}>
                    <KnowledgeStats />
                </div>
                <div className={css.categories}>
                    <Collections />
                </div>
            </div>
        );
    }
}

export default Home;
