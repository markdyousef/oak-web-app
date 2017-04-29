// @flow
import React, { PropTypes } from 'react';

import css from './Avatar.css';

const Avatar = ({ img }:Object) => (
    <div className={css.avatar}>
        {img && <img src={img} alt="profile" />}
    </div>
);

Avatar.propTypes = {
    img: PropTypes.string
};

Avatar.defaultProps = {
    img: null
};

export default Avatar;
