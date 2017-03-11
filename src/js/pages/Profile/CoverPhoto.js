import React, { PropTypes } from 'react';

import css from './Profile.css';

const CoverPhoto = ({ picture }) => {
    return (
        <div className={css.cover}>
            <img src={picture} alt="profile cover" />
        </div>
    );
};

CoverPhoto.propTypes = {
    picture: PropTypes.string
};

CoverPhoto.defaultProps = {
    picture: null
};

export default CoverPhoto;
