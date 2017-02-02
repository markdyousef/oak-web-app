// @flow
import React, { Component, PropTypes } from 'react';
import Member from './Member';

import css from './TeamMembers.css';

class TeamMembers extends Component {
    static propTypes = {
        getMembers: PropTypes.func.isRequired,
        members: PropTypes.arrayOf(PropTypes.object),
        team: PropTypes.string.isRequired
    }
    static defaultProps = {
        members: []
    }
    constructor() {
        super();
        this.renderMembers = this.renderMembers.bind(this);
        super();
        this.state = {};
    }
    componentWillMount() {
        const { getMembers, team } = this.props;
        getMembers(team);
    }
    renderMembers() {
        const { members } = this.props;
        console.log(members);
        if (members.length > 0) {
            return members.map(member => (
                <Member member={member} key={member.id} />
            )
        );
        }
        return <div>No Members</div>;
    }
    render() {
        return (
            <div className={css.container}>
                <h1>Members</h1>
                {this.renderMembers()}
            </div>
        );
    }
}

export default TeamMembers;
