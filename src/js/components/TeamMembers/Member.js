// @flow
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Avatar from '../shared/Avatar';

import css from './TeamMembers.css';

const Member = ({ member }: Object) => {
    const { profile } = member;
    return (
        <Link
            className={css.member}
            to={`/user/${member}`}
        >
            <Avatar img={profile.image_72} />
            <h4>{member.name}</h4>
        </Link>
    );
};

Member.propTypes = {
    member: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profile: PropTypes.shape({
            image_72: PropTypes.string.isRequired
        })
    })
};

Member.defaultProps = {
    member: {}
};

export default Member;
