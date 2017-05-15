import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.nav`
    width: 100%;
    height: 60px;
    margin-bottom: 60px;
    background-color: #fff;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    justify-content: flex-end;
    position: fixed;
    flex-shrink: 0;
    z-index: 99999999;
`;

// Navigation left
export const NavLeft = styled.div`
    left: 0;
    position: absolute;
    margin-left: 25px;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const Collections = styled.button`
    padding: 0;
    border: 0;
    background-color: #fff;
    font-size: 15px;
    margin-left: 7px;
    cursor: pointer;
`;

export const Dropdown = styled.div`
    top: 60px;
    position: absolute;
    min-width: 200px;
    z-index: 9999;
`;

export const MenuItem = styled.div`
    width: 100%;
    cursor: pointer;
    padding-top: 5px;
    margin-top: 10px;
`;

export const MenuTitle = styled.div`
    color: ${colors.grey};
    font-size: 12px;
`;

export const All = styled.div`
    padding: 16px 0;
    color: ${colors.grey};
    font-size: 15px;
    border-bottom: 1px solid ${colors.lightGrey};
    cursor: pointer;
`;

export const Add = styled.div`
    display: flex;
    margin-top: 16px;
    cursor: pointer;
`;

export const Logo = styled.div`
    ${''/* height: 100%; */}
    width: 45px;
    margin-right: 25px;
    border-right: 1px solid ${colors.lightGrey}
`;

export const ActiveMenu = styled.span`
    font-weight: bold;
    margin-left: 10px;
`;

// Navigation Right
export const NavRight = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 25px;
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


// Action Bar
export const NavCenter = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const EditNav = styled.div`
    display: flex;
`;
