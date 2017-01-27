// @flow
import React from 'react';

import BaseStats from '../../components/BaseStats';

import css from './Home.css';

const Home = () => {
    return (
        <div className={css.container}>
            <h1>Hello</h1>
            <BaseStats />
        </div>
    );
};

export default Home;
