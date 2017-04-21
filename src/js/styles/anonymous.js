import styled from 'styled-components';
import colors from './colors';

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

export default {
    Box,
    ErrorMessage
};
