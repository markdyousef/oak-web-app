// @flow
import React, { Component } from 'react';

import styles from './Home.css';

class Home extends Component {
    props: {
        params: Object
    };
    render() {
        return (
            <div className={styles.container}>
                <h1>Hello</h1>
            </div>
        );
    }
}

export default Home;
