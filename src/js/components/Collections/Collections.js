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
        this.state = {
            showAdd: false
        };
    }
    render() {
        const { showAdd } = this.state;
        const { data } = this.props;

        if (data.loading) return <div>LOADING</div>

        const { groves } = data;

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
                                close={() => this.setState({ showAdd: false })}
                            />
                        }
                    </div>
                </div>
                <div className={css.grid}>
                    {groves.map(grove =>
                        <Link to={`/${grove.id}`} key={grove.id}>
                            <Card title={grove.title} />
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}

export default Collections;
