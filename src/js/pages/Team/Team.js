// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import SideNav from '../../containers/SideNavContainer';
import TopNav from '../../containers/TopNavContainer';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const LeftPane = styled.section`
    ${''/* position: absolute; */}
    height: 100%;
    width: 230px;
`

const Main = styled.section`
    width: 100%;
`;

class Team extends Component {
    static propTypes = {
        children: PropTypes.node
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Container>
                <LeftPane>
                    <SideNav />
                </LeftPane>
                <Main>
                    <TopNav team />
                    {this.props.children}
                </Main>
            </Container>

        );
    }
}

export default Team;
