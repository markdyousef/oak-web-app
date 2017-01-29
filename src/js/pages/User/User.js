// @flow
import React, { PropTypes } from 'react';
import UserProfile from '../../containers/UserProfileContainer';

import css from './User.css';

const User = ({ params }: Object) => {
    const { userId } = params;
    return (
        <div className={css.container}>
            <UserProfile userId={userId} />
        </div>
    );
};

User.propTypes = {
    params: PropTypes.shape({
        userId: PropTypes.string.isRequired
    })
};
export default User;
