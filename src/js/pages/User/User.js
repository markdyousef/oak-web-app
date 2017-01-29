// @flow
import React, { PropTypes } from 'react';

import css from './User.css';

const User = ({ params }: Object) => {
    const { userId } = params;
    console.log(userId);
    return (
        <div className={css.container}>
            USER
        </div>
    );
};

User.propTypes = {
    params: PropTypes.shape({
        userId: PropTypes.string.isRequired
    })
};
export default User;
