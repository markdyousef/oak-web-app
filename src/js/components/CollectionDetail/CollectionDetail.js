// @flow
import React, { Component, PropTypes } from 'react';
import Card from '../Card';
import Button from '../shared/Button';
import Description from '../shared/Description';
import TopNav from '../TopNav'


import css from './CollectionDetail.css';

class CollectionDetail extends Component {
    static propTypes = {
        params: PropTypes.shape({
            collectionId: PropTypes.string
        }).isRequired,
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
        this.renderCards = this.renderCards.bind(this);
        this.state = {};
    }
    renderCards() {
        const { data, router, params } = this.props;

        if (data.loading) return <div>LOADING</div>

        if (!data.loading && data.seeds) {
            return (
                <div className={css.grid}>
                    {data.seeds.map(item =>
                        <div
                            onClick={() => router.push(`collection/${params.collectionId}/card/${item.id}`)}
                            className={css.card}
                            key={item.id}
                        >
                            <Card title={item.content} />
                        </div>
                    )}
                </div>
            )
        }

        return null;
    }
    render() {
        const { router, params } = this.props;

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
                            onClick={() => router.push(`collection/${params.collectionId}/card`)}
                            text="Add Card"
                            type="primary"
                        />
                    </div>
                </div>
                {this.renderCards()}
            </div>
        );
    }
}

export default CollectionDetail;
