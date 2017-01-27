// @flow
import React from 'react';

import TeamStats from '../../containers/TeamStatsContainer';
import TopNav from '../../containers/TopNavContainer';

import css from './Home.css';

const Home = () => {
    return (
        <div className={css.container}>
            <TopNav />
            <TeamStats team="clai" />
        </div>
    );
};

export default Home;
