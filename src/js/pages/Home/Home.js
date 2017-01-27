// @flow
import React from 'react';

import TeamStats from '../../containers/TeamStatsContainer';
import TopNav from '../../containers/TopNavContainer';

import css from './Home.css';

const Home = () => {
    return (
        <div className={css.container}>
            <TopNav />
            <div>
                <TeamStats team="clai" />
            </div>
        </div>
    );
};

export default Home;
