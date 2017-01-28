// @flow
import React, { Component, PropTypes } from 'react';

import css from './ChannelDetail.css';

class ChannelDetail extends Component {
    static propTypes = {
        data: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            members: PropTypes.arrayOf(PropTypes.string)
        })
    };
    constructor() {
        super();
        this.renderMembers = this.renderMembers.bind(this);
        this.state = {};
    }
    renderMembers() {
        const { data } = this.props;

        // check if members is an array
        const members = (data.members) ? data.members : [];
        // some channels has no members
        if (members.length === 0) {
            return <div className={css.noMembers}>No members</div>;
        }
        return members.map(member => (
            <div className={css.member} key={member}>
                <span>{member}</span>
            </div>
        ));
    }
    render() {
        const { data } = this.props;
        return (
            <div className={css.container}>
                <header>
                    <h1>{data.name}</h1>
                </header>
                <div className={css.membersContainer}>
                    {this.renderMembers()}
                </div>
            </div>
        );
    }
}

export default ChannelDetail;
