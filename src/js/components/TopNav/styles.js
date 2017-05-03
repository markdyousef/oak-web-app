import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-shrink: 0;
`;

export const Profile = styled.button`
    height: 32px;
    width: 32px;
    border-radius: 999em;
    border: 1px solid #E5E5E5;
    margin-left: 5px;
    padding: 0;
    margin-left: 15px;
`;

export const NavRight = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 25px;
    width: 200px;
`;

export const NavLeft = styled.div`
    margin-left: 25px;
    height: 100%;
    display: flex;
    align-items: center;
    width: 200px;
`;

export const NavCenter = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Dropdown = styled.div`
    top: 60px;
    position: absolute;
    min-width: 200px;
    z-index: 9999;
`;

export const Collections = styled.button`
    padding: 0;
    border: 0;
    background-color: #fff;
    font-size: 15px;
    margin-left: 7px;
    font-family: 'Proxima-Nova';
    cursor: pointer;
`;

export const Item = styled.div`
    width: 100%;
    cursor: pointer;
    padding-top: 5px;
    margin-top: 10px;
`;

export const ItemTitle = styled.div`
    color: ${colors.grey};
    font-size: 12px;
`;

export const All = styled.div`
    padding: 16px 0;
    color: ${colors.grey};
    font-size: 15px;
    border-bottom: 1px solid ${colors.lightGrey};
`;

export const Add = styled.div`
    display: flex;
    margin-top: 16px;
`;
