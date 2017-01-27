// @flow
import React from 'react';

import TeamStats from '../../containers/TeamStatsContainer';

import css from './Home.css';

const Home = () => {
    return (
        <div className={css.container}>
            <h1>Hello</h1>
            <TeamStats team="clai" />
        </div>
    );
};

export default Home;
