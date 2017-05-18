// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import CreateTeam from './CreateTeam';
import Team from './Team';
import logo from '../../../img/cuest-logo.svg';
import { selectTeam } from '../../utils';

import css from './Admin.css';

const Submit = styled.button `
    position: absolute;
    bottom: 80px;
    right: 80px;
    background: #fff;
    font-size: 20px;
    font-weight: bold;
    color: #34B289;
    border-radius: 3px;
    z-index: 9999;
    display: block;
    border: none;
    padding: 16px 32px;
    cursor: pointer;
    &:active {
        opacity: 0.8;
    }
`;

type DefaultProps = {}

type Props = {
    createTeam?: (name: string) => Promise<>,
    data: {
        loading: bool,
        teams: Array<Object>
    },
    router: {
        replace?: (path: Object) => void
    },
    location: {
        pathname: string
    }
}

type State = {
    activeTeam: ?Object,
    message: ?string
}

class Admin extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps = {};
    state: State = {
        activeTeam: null,
        message: null,
        router: {},
        data: {},
        pathname: {}
    }
    componentWillReceiveProps(nextProps: Props) {
        const { data: { teams, loading } } = nextProps;

        if (loading || !teams) return;
        this.setState({ activeTeam: teams[0] })


    }
    // createTeam = () => {
    //     const { teamName } = this.state;
    //     const { createTeam } = this.props;
    //     createTeam(teamName)
    //         .then(res => console.log(res))
    //         .catch(err => this.setState({ message: { type: 'error', message: 'shit' } }));
    // }
    selectTeam = (team: Object) => {
        this.setState({ activeTeam: team });
    }
    onContinue = () => {
        const {
            router: { replace },
            location: { pathname }
        } = this.props;
        const { activeTeam } = this.state;

        if (!activeTeam) return;
        selectTeam(activeTeam.id);
        if (replace) {
            replace({
                pathname: '/',
                state: { nextPathname: pathname }
            });
        }
    }
    renderTeams = () => {
        const { data } = this.props;
        if (data.loading) return <div>LOADING </div>;

        if (data.teams && data.teams.length > 0) {
            return (
                <div>
                    {data.teams.map(team =>
                        <Team
                            team={team}
                            onSelect={() => this.selectTeam(team)}
                            key={team.id}
                        />
                    )}
                </div>
            );
        }

        return <div>You dont have any teams yet</div>
    }
    render() {
        const { activeTeam } = this.state;
        return (
            <div className={css.container}>
                <div className={css.SidePanel}>
                    <img src={logo} alt="presentation" />
                    <div className={css.SidePanelInner}>
                        <h1> Hi there! Welcome to Cuest.</h1>
                        <p> We've created a team for you, so all you need to do is Sign in. </p>
                    </div>
                </div>
                {/* <CreateTeam
                     onChange={value => this.setState({ teamName: value })}
                     onSubmit={this.createTeam}
                     teamName={teamName}
                /> */}
                <div className={css.teamList}>
                    <div className={css.teamListInner}>
                        {this.renderTeams()}
                    </div>
                    <Submit onClick={this.onContinue}>
                        <span>Sign in to {activeTeam && activeTeam.name}</span>
                    </Submit>
                </div>
            </div>
        );
    }
}


export default Admin;
