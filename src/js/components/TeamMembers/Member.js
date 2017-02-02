// @flow
import React, { PropTypes } from 'react';

import css from './TeamMembers.css';

const Member = ({ member }: Object) => (
    <div className={css.member}>
        <div>{member.name}</div>
    </div>
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
