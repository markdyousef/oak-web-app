// @flow
import React from 'react';
import styled from 'styled-components';
// import SideNav from '../../containers/SideNavContainer';
import TopNav from '../../containers/TopNavContainer';

const Container = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    flex-grow: 1;
`;

const InnerContainer = styled.div`
    z-index: 0;
    display: flex;
    flex: 1;
`;

const Main = styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-grow: 1;
    min-width: 1px;
`;

const MainInner = styled.div`
    display: block;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    padding-bottom: 40px;
`;

export default ({ children, router }:Object) => (
    <Container>
        <InnerContainer>
            {/* <SideNav /> */}
            <Main>
                <TopNav team router={router} />
                <MainInner>
                    {children}
                </MainInner>
            </Main>
        </InnerContainer>
    </Container>
);
