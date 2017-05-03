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
    z-index: 2000;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Modal = styled.div`
    width: 400px;
    ${''/* height: 350px; */}
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
        font-size: 16px;
        font-weight: bold;
    }
`;

export const Close = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    font-size: 25px;
`;

export const Main = styled.div`
    margin-top: 20px;
    padding: 5px 20px;
    width: 100%;
    & div {
        margin-top: 20px;
    }
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
    padding: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
