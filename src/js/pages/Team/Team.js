// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import SideNav from '../../containers/SideNavContainer';
import TopNav from '../../containers/TopNavContainer';

const Container = styled.div`
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
    flex-direction: column;
`;

const InnerContainer = styled.div`
    z-index: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    display: flex;
`;

const Main = styled.section`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    position: relative;
    min-width: 1em;
    max-width: 100%;
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
                <InnerContainer>
                    <SideNav />
                    <Main>
                        <TopNav team />
                        {this.props.children}
                    </Main>
                </InnerContainer>
            </Container>

        );
    }
}

export default Team;
