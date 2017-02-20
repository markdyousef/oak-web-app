import React, { Component, PropTypes } from 'react';
import Card from '../Card';

import css from './CollectionDetail.css';

const ITEMS = [
    {
        title: 'React',
        id: '1'
    },
    {
        title: 'Jest',
        id: '2'
    },
    {
        title: 'GraphQL',
        id: '3'
    }
];

class CollectionDetail extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                <div className={css.header}>
                    TEXT
                </div>
                <div className={css.grid}>
                    {ITEMS.map(item =>
                        <div className={css.card} key={item.id}>
                            <Card title={item.title} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default CollectionDetail;
