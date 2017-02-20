// @flow
import React, { Component, PropTypes } from 'react';
import KnowledgeStats from '../../components/KnowledgeStats';
import Categories from '../../components/Categories';

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
                <KnowledgeStats />
                <Categories />
            </div>
        );
    }
}

export default Home;
