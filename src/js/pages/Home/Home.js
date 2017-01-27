// @flow
import React from 'react';

import TeamStats from '../../containers/TeamStatsContainer';

import css from './Home.css';

const Home = () => {
    return (
        <div className={css.container}>
            <nav>
                <h1>Navigation</h1>
            </nav>
            <TeamStats team="clai" />
        </div>
    );
};

export default Home;
