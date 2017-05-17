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
    padding: 16px 16px 20px;
    margin: 8px;
    position: relative;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    & img {
        height: 25px;
        width: 25px;
        border-radius: 999em;
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

export const LabelWrapper = styled.div`
    padding: 6px;
    border: 1px solid #e5e5e5;
    display: inline-block;
    border-radius: 3px;
    margin-right: 8px;
`;

export const Labels = styled.div`
    position: relative;
    display: block;
    padding-top: 8px;
`;

export const Label = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 3px;
    line-height: 1.54;
    margin-right: 4px;
`;

export const Main = styled.div`
    margin-bottom: 8px;
    text-align: left;
    cursor: pointer;
    & h1 {
        font-size: 24px;
        color: rgba(19, 21, 23, 0.9);
        letter-spacing: -0.12px;
        padding-bottom: 8px;
        line-height: 1.28;
        font-weight: bold;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    & h2 {
        font-size: 20px;
        color: rgba(19, 21, 23, 0.5);
        letter-spacing: -0.08px;
        padding-bottom: 12px;
        max-width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    & p {
        font-size: 16px;
        color: rgba(19, 21, 23, 0.8);
        line-height: 1.38;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    & img {
        max-width: 288px;
        width: 100%;
        margin-bottom: 16px;
        ${''/* height: 100px; */}
    }
    & button {
        margin-top: 16px;
        ${button()};
        color: ${colors.grey}
    }
`;

export const Paragraph = styled.div`
    max-height: 4.1em;
    overflow: hidden;
`;

export const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    & div {
        display: flex;
        align-items: center;
    }
    & span {
        display: flex;
        align-items: center;
    }
`;

export const Time = styled.span`
    font-size: 12px;
    color: ${colors.grey};
    padding-top: 8px;
    display: block;
`;

export const Icon = styled.div`
    height: 18px;
    display: flex;
    align-items: center;
    margin-right: 16px;
    cursor: pointer;
    & span {
        color: ${colors.black};
        font-size: 14px;
    }
    & svg {
        height: 100%;
        height: 18px;
        margin-right: 4px;
    }
`;

export const Settings = styled.div`
    position: absolute;
    width: 100px;
    bottom: -55px;
    left: 82px;
    z-index: 99;
`;

export const H1 = styled.h1`
    width: 100%;
`;

export const H2 = styled.h2`
    width: 100%;
`;

export const P = styled.p`
    width: 100%;
`;
