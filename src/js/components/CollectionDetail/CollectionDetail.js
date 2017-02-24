// @flow
import React, { Component, PropTypes } from 'react';
import Card from '../Card';
import Button from '../shared/Button';
import Description from '../shared/Description';
import TopNav from '../TopNav'


import css from './CollectionDetail.css';

class CollectionDetail extends Component {
    static propTypes = {
        router: PropTypes.shape({
            push: PropTypes.func
        }).isRequired,
        data: PropTypes.shape({
            loading: PropTypes.bool,
            seeds: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired
            }))
        }).isRequired
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { router, data } = this.props;

        if (data.loading) return <div>LOADING</div>

        const { seeds } = data;
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
                    {seeds.map(item =>
                        <div
                            onClick={() => router.push(`card/${item.id}`)}
                            className={css.card}
                            key={item.id}
                        >
                            <Card title={item.content} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default CollectionDetail;
