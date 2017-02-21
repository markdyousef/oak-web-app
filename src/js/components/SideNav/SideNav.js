// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Button from '../shared/Button'

import css from './SideNav.css';

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

class SideNav extends Component {
    static propTypes = {};
    static defaultProps = {};
    constructor() {
        super();
        this.renderSubCategories = this.renderSubCategories.bind(this);
        this.state = {};
    }
    renderSubCategories(categories) {
        return (
            <div className={css.subCategories}>
                {categories.map(category => (
                    <div key={category.id}>
                        <Link
                            to={`/${category.id}`}
                            activeStyle={{ 'font-weight': 'bold' }}
                        >
                            {category.title}
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
    render() {
        return (
            <div className={css.container}>
                <div className={css.collections}>
                    <Link to="/">
                        <div />
                        <h1>Collections</h1>
                    </Link>
                    {this.renderSubCategories(CATEGORIES)}
                </div>
                <Button
                    onClick={() => console.log('click')}
                    text="Add Collection"
                    type="primary"
                />
            </div>
        );
    }
}

export default SideNav;
