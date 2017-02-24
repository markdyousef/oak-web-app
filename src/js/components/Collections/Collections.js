// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Card from '../Card';
import Button from '../shared/Button';
import CollectionDialog from '../../containers/CollectionDialogContainer';
import KnowledgeStats from '../KnowledgeStats';

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
        this.state = {
            showAdd: false
        };
    }
    render() {
        const { showAdd } = this.state;
        console.log(this.props);
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
