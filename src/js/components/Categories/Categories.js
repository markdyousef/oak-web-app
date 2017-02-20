// @flow
import React, { Component, PropTypes } from 'react';
import Card from '../Card';

import css from './Categories.css';

const CATEGORIES = [
    {
        title: 'Design'
    },
    {
        title: 'Frontend'
    },
    {
        title: 'Strategy'
    }
];

class Categories extends Component {
    static propTypes = {};
    static defaultProps = {};
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                <div className={css.toolbar}>
                    TOOLBAR
                </div>
                <div className={css.grid}>
                    {CATEGORIES.map(category => <Card title={category.title} key={category.title} />)}
                </div>
            </div>
        );
    }
}

export default Categories;
