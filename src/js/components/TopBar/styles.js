import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.nav`
    width: 100%;
    height: 60px;
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
    margin-left: 20px;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const NavContainer = styled.div`
    position: relative;
`;

export const CollectionWrapper = styled.div`
    cursor: pointer;
    display: inline-block;
`;

export const Collections = styled.button`
    padding: 0;
    border: 0;
    background-color: #fff;
    font-size: 15px;
    margin-right: 4px;
    cursor: pointer;
`;

export const ArrowWrapper = styled.div`
    display: inline-block;
    position: relative;
    top: 1px;
`;

export const Dropdown = styled.div`
    position: absolute;
    min-width: 200px;
    z-index: 9999;
    margin-top: 20px;
`;

export const MenuItem = styled.a`
    width: 100%;
    cursor: pointer;
    margin-top: 16px;
    &:hover {
        color: #34B289;
    }
`;

export const MenuTitle = styled.div`
    color: ${colors.grey};
    font-size: 12px;
    text-transform: uppercase;
`;

export const All = styled.div`
    padding: 16px 0;
    color: ${colors.grey};
    font-size: 15px;
    border-bottom: 1px solid ${colors.lightGrey};
    cursor: pointer;
    &:hover {
        color: #34B289;
    }
`;

export const Add = styled.div`
    display: flex;
    margin-top: 16px;
    cursor: pointer;
    &:hover {
        color: #34B289;
    }
    &:hover svg {
        fill: #34B289;
    }
    & svg {
        margin-right: 8px;
    }
`;

export const Logowrapper = styled.div`
    ${''/* height: 100%; */}
    height: 60px;
    border-right: 1px solid #e5e5e5;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

export const Logo = styled.div`
    ${''/* height: 100%; */}
    width: 28px;
    height: 28px;
    margin-right: 20px;
    cursor: pointer;
`;

export const ActiveMenu = styled.span`
    font-weight: bold;
    margin-left: 8px;
    cursor: pointer;
    display: inline-block;
`;

// Navigation Right
export const NavRight = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
`;

export const ProfileWrapper = styled.div`
    height: 35px;
    width: 35px;
    margin-left: 8px;
`;

export const Profile = styled.button`
    height: 35px;
    width: 35px;
    border: none;
    border-radius: 999em;
    padding: 0;
`;


// Action Bar
export const NavCenter = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const EditNav = styled.div`
    display: flex;
    align-items: center;
`;

export const Labels = styled.div`
    position: relative;
`;

export const LabelsContainer = styled.div`
    position: absolute;
    z-index: 9999;
    width: 250px;
    right: 0;
    margin-top: 15px;
`;

export const IconButton = styled.div`
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
