import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
`;

export const Header = styled.section`
    width: 100%;
    min-height: 260px;
    background-color: ${colors.white};
    padding: 48px 72px;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Info = styled.div`
    max-width: 500px;
    & h1 {
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 24px;
        display: block;
        letter-spacing: -.04em;
    }
    & p {
        font-size: 18px;
        font-weight: normal;
        padding-bottom: 40px;
        display: block;
        line-height: 1.48;
    }
`;

export const Stats = styled.div`
    & div {
        display: inline-block;
        margin-right: 20px;
    }
    & h3 {
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 8px;
        display: block;
    }
    & h5 {
        font-size: 14px;
        font-weight: 300;
        text-transform: uppercase;
        padding-bottom: 8px;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    & button {
        margin-top: 5px;
    }
`;

export const Grid = styled.section`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
