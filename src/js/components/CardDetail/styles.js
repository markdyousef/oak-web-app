// @flow
import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.white};
`;

export const ContainerInner = styled.div`
    position: relative;
    ${''/* display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 1px; */}
`;

export const Main = styled.section`
    margin-top: 60px;
    overflow: hidden;
    display: flex;
    flex: 1;
`;

export const EditorContainer = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex: 1;
    height: 100%;
    overflow: scroll;
    height: 100vh;
    padding: 50px 0 30px 0;
    @media (max-width: 1200px) {
        padding: 50px 40px 30px 160px;
    }
    &::-webkit-scrollbar {
        display: none;
    }
`;
