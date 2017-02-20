import React, { Component, PropTypes } from 'react';
import Card from '../Card';
import CardDetail from '../CardDetail';

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
        this.state = {
            showCard: false
        };
    }
    render() {
        const { showCard } = this.state;
        return (
            <div className={css.container}>
                <div className={css.header}>
                    TEXT
                </div>
                <div className={css.grid}>
                    {ITEMS.map(item =>
                        <div
                            onClick={() => this.setState({ showCard: !showCard })}
                            className={css.card}
                            key={item.id}
                        >
                            <Card title={item.title} />
                        </div>
                    )}
                </div>
                {showCard && <CardDetail close={() => this.setState({ showCard: false })} />}
            </div>
        );
    }
}

export default CollectionDetail;
