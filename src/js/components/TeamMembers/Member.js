// @flow
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import css from './TeamMembers.css';

const Member = ({ member }: Object) => (
    <Link
        className={css.member}
        to={`/user/${member}`}
    >
        <div />
        <h4>{member.name}</h4>
    </Link>
);

Member.propTypes = {
    member: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};

Member.defaultProps = {
    member: {}
};

export default Member;
