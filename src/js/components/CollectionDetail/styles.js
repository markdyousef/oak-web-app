import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
`;

export const Header = styled.section`
    width: 100%;
    background-color: ${colors.white};
    padding: 40px 40px;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 60px;
`;

export const HeaderContent = styled.section`
    width: 100%;
    max-width: 990px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: inherit;
    @media (min-width: 1600px) {
        max-width: 1328px;
    }
`;

export const Info = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & h1 {
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 24px;
        display: block;
        letter-spacing: -.04em;
    }
    & h3 {
        font-size: 18px;
        font-weight: normal;
        padding-bottom: 20px;
        display: block;
        line-height: 1.48;
    }
`;

export const Stats = styled.div`
    & div {
        display: inline-block;
        margin-right: 20px;
        min-width: 50px;
    }
    & h3 {
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 8px;
        display: block;
    }
    & h5 {
        font-size: 12px;
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

export const masonStyles = {
};

export const Grid = styled.section`
    padding: 20px 20px 80px;
    max-width: 1048px;
    margin: 0 auto;
    @media (min-width: 1600px) {
        max-width: 1384px;
    }
`;

export const Loading = styled.div`
    background-color: #f2f2f2;
    height: 12px;
    width: 100%;
    border-radius: 3px;
`;

export const DropdownContainer = styled.div`
    position: relative;
`;

export const Dropdown = styled.div`
    top: 10px;
    width: 160px;
    position: absolute;
    z-index: 99999;
    font-size: 14px;
`;

export const MenuItem = styled.div`
    margin-top: 10px;
    cursor: pointer;
`;
