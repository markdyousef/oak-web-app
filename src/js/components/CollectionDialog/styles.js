import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(19, 21, 23, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    & h1 {
        font-size: 20px;
        font-weight: bold;
    }
`;

export const Close = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    font-size: 45px;
    font-weight: 100;
    margin-top: -8px;
    margin-right: -10px;
    color: rgba(19, 21, 23, 0.5);
    &:hover {
        color: rgba(19, 21, 23, 1);
    }
`;

export const Main = styled.div`
    padding: 20px;
    width: 100%;
`;

export const Intro = styled.div`
    font-size: 16px;
    color: #131517;
    line-height: 1.35;
`;

export const InputWrapper = styled.div`
    padding-top: 24px;
`;

export const InputLabels = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: rgba(19, 21, 23, 0.75);
    padding-bottom: 4px;
`;

export const InputName = styled.div`
    font-size: 13px;
    font-weight: normal;
    color: rgba(19, 21, 23, 0.5);
    padding-top: 6px;
`;

export const Upload = styled.div`
    height: 210px;
    border: 1px solid ${colors.lightGrey};
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: ${colors.lightGrey};
    cursor: pointer;
    & img {
        height: 100%;
        width: 100%;
        border-radius: 3px;
    }
`;

export const Buttons = styled.div`
    border-top: 1px solid #e5e5e5;
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
