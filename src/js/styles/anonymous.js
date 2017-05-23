import styled from 'styled-components';
import colors from './colors';

const Container = styled.section`
    width: 100%;
`;

const Box = styled.div`
    margin: auto;
    margin-top: 125px;
    width: 480px;
    ${''/* height: 380px; */}
    background-color: ${colors.white};
    padding: 64px 100px;
    display: flex;
    flex-direction: column;
    border: 1px solid ${colors.lightGrey};
    border-radius: 3px;
    & h1 {
        font-size: 32px;
        font-weight: bold;
        text-align: center;
    }
    & div {
        margin-top: 15px;
    }
`;

const ErrorMessage = styled.div`
    width: 100%;
    background-color: ${colors.orange};
    border-radius: 3px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
`;

const ChangePage = styled.div`
    max-width: 360px;
    margin: auto;
    padding-top: 32px;
    color: ${colors.grey};
    text-align: center;
    & a {
        font-weight: bold;
        color: ${colors.grey};
    }
`;

const Footer = styled.section`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: ${colors.white};
    border-top: 1px solid ${colors.lightGrey};
`;

export default {
    Container,
    Box,
    ErrorMessage,
    ChangePage,
    Footer
};
