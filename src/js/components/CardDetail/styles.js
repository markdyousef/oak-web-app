import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${colors.white};
    top: 0;
`;

export const Main = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const CommentsContainer = styled.div`
    width: 300px;
    height: 80%;
    position: absolute;
    right: 0;
`;

export const EditorContainer = styled.div`
    padding-top: 20px;
    width: 100%;
`;
