// @flow
import React, { Component, PropTypes } from 'react';
import Card from '../Card';
import Button from '../shared/Button';
import Description from '../shared/Description';
import TopNav from '../TopNav'


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
    static propTypes = {
        router: PropTypes.shape({
            push: PropTypes.func.isRequired
        })
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { router } = this.props;
        return (
            <div className={css.container}>
                <TopNav />
                <div className={css.header}>
                    <div className={css.description}>
                        <Description />
                    </div>
                    <div className={css.toolbar}>
                        <div>
                            STATS
                        </div>
                        <Button
                            onClick={() => router.push('card')}
                            text="Add Card"
                            type="primary"
                        />
                    </div>
                </div>
                <div className={css.grid}>
                    {ITEMS.map(item =>
                        <div
                            onClick={() => router.push(`card/${item.id}`)}
                            className={css.card}
                            key={item.id}
                        >
                            <Card title={item.title} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default CollectionDetail;
