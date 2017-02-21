// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Card from '../Card';
import Button from '../shared/Button';

import css from './Collections.css';

const CATEGORIES = [
    {
        title: 'Design',
        id: '1'
    },
    {
        title: 'Frontend',
        id: '2'
    },
    {
        title: 'Strategy',
        id: '3'
    }
];

class Collections extends Component {
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
                    <Button
                        onClick={() => {}}
                        text="Add Collection"
                        type="primary"
                    />
                </div>
                <div className={css.grid}>
                    {CATEGORIES.map(category =>
                        <Link to={`/${category.id}`} key={category.id}>
                            <Card title={category.title} />
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}

export default Collections;
