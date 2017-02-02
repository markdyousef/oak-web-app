// @flow
import React, { PropTypes } from 'react';

import css from './TeamMembers.css';

// import placeholderImg
const placeholderImg = null;

const Avatar = ({ img }:Object) => (
    <div className={css.avatar}>
        <img src={img} alt="profile" />
    </div>
);

Avatar.propTypes = {
    img: PropTypes.string
};

Avatar.defaultProps = {
    img: placeholderImg
};

export default Avatar;
