// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Card from '../Card';
import Button from '../shared/Button';
import CollectionDialog from '../../containers/CollectionDialogContainer';
import KnowledgeStats from '../KnowledgeStats';

import css from './Collections.css';

class Collections extends Component {
    static propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            groves: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired
            }))
        }).isRequired
    };
    static defaultProps = {};
    constructor() {
        super();
        this.renderCollections = this.renderCollections.bind(this);
        this.state = {
            showAdd: false
        };
    }
    renderCollections() {
        const { data } = this.props;

        if (data.loading) return <div>LOADING</div>

        if (!data.loading && data.groves) {
            return (
                <div className={css.grid}>
                    {data.groves.map(grove =>
                        <Link to={`/collection/${grove.id}`} key={grove.id}>
                            <Card title={grove.title} />
                        </Link>
                    )}
                </div>
            );
        }

        return null;
    }
    render() {
        const { showAdd } = this.state;
        const { data } = this.props;
        return (
            <div className={css.container}>
                <div className={css.header}>
                    <div className={css.stats}>
                        <KnowledgeStats />
                    </div>
                    <div className={css.toolbar}>
                        <Button
                            onClick={() => this.setState({ showAdd: true })}
                            text="Add Collection"
                            type="primary"
                        />
                        {showAdd &&
                            <CollectionDialog
                                close={() => {
                                    data.refetch();
                                    this.setState({ showAdd: false });
                                }}
                            />
                        }
                    </div>
                </div>
                {this.renderCollections()}
            </div>
        );
    }
}

export default Collections;
