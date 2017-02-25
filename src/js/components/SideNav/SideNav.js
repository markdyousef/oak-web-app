// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import css from './SideNav.css';

class SideNav extends Component {
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
        this.renderSubCategories = this.renderSubCategories.bind(this);
        this.state = {};
    }
    renderSubCategories() {
        const { data } = this.props;

        if (data.loading) return <div>Loading</div>;

        if (!data.loading && data.groves) {
            return (
                <div className={css.subCategories}>
                    {data.groves.map(category => (
                        <div key={category.id}>
                            <Link
                                to={`collection/${category.id}`}
                                activeStyle={{ fontWeight: 'bold' }}
                            >
                                {category.title}
                            </Link>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    }
    render() {
        return (
            <div className={css.container}>
                <div className={css.collections}>
                    <Link to="/">
                        <div />
                        <h1>Collections</h1>
                    </Link>
                    {this.renderSubCategories()}
                </div>
            </div>
        );
    }
}

export default SideNav;
