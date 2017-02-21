// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Card from '../Card';
import CardDetail from '../CardDetail';
import Button from '../shared/Button';
import Description from '../shared/Description';


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
                    <div className={css.description}>
                        <Description />
                    </div>
                </div>
                <div className={css.toolbar}>
                    <Button
                        onClick={() => this.setState({ showCard: true })}
                        text="Add Card"
                        type="primary"
                    />
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
                {showCard &&
                    <CardDetail
                        close={() => this.setState({ showCard: false })}
                    />
                }
            </div>
        );
    }
}

export default CollectionDetail;
