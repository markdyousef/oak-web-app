import styled from 'styled-components';
import colors from '../../styles/colors';

const button = () => {
    return `
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 0
    `;
};

export const Container = styled.div`
    width: 320px;
    background-color: ${colors.white};
    border: 1px solid ${colors.lightGrey};
    border-radius: 3px;
    padding: 16px;
    margin: 5px;
    position: relative;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    & img {
        height: 25px;
        width: 25px;
        border-radius: 999em;
        margin-right: 5px;
        border: 1px solid ${colors.lightGrey}
    }
    & h4 {
        font-size: 14px;
        font-weight: bold;
        color: ${colors.black}
    }
    & h5 {
        font-size: 14px;
        font-weight: normal;
        color: ${colors.grey}
    }
`;

export const Labels = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 20px;
    width: 50%;
    overflow: hidden;
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-end;
`;

export const Label = styled.div`
    width: 10px;
    height: 20px;
    line-height: 1.54;
    display: inline-block;
    margin-right: 2px;
`;

export const Main = styled.div`
    margin-bottom: 16px;
    text-align: left;
    & h1 {
        font-size: 32px;
        color: ${colors.black};
        letter-spacing: -0.12px;
        padding-bottom: 16px;
    }
    & h2 {
        font-size: 22px;
        color: ${colors.grey};
        letter-spacing: -0.08px;
        padding-bottom: 24px;
    }
    & p {
        font-size: 16px;
        color: ${colors.black};
    }
    & img {
        max-width: 288px;
        width: 100%;
        margin-bottom: 16px;
        height: 100px;
    }
    & button {
        margin-top: 16px;
        ${button()};
        color: ${colors.grey}
    }
`;

export const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    & div {
        display: flex;
    }
`;

export const Time = styled.span`
    font-size: 11px;
    color: ${colors.grey}
`;

export const Icon = styled.div`
    height: 18px;
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    & span {
        color: ${colors.grey};
        font-size: 14px;
    }
    & svg {
        height: 100%;
        width: 18px;
        margin-right: 3px;
    }
`;

export const Settings = styled.div`
    position: absolute;
    width: 100px;
    bottom: -55px;
    left: 82px;
    z-index: 99;
`;
