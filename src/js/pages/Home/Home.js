// @flow
import React, { Component, PropTypes } from 'react';
import Collections from '../../containers/CollectionsContainer';

import css from './Home.css';

class Home extends Component {
    static propTypes = {};
    static defaultProps = {};
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                <div className={css.categories}>
                    <Collections />
                </div>
            </div>
        );
    }
}

export default Home;
