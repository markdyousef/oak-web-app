import styled from 'styled-components';
import colors from '../../../styles/colors';

export const style = (type) => {
    if (type === 'primary') {
        return `
            background-color: ${colors.green};
            border-color: ${colors.green};
            color: ${colors.white};
            &:hover {
                color: #fff;
                background: #34B289;
            }
            &:active {
                background: #249E76;
                border: 1px solid #249E76;
            }`;
    }
    if (type === 'primaryLarge') {
        return `
            background-color: ${colors.green};
            border-color: ${colors.green};
            color: ${colors.white};
            min-width: 180px;
            &:hover {
                color: #fff;
                background: #34B289;
            }
            &:active {
                background: #249E76;
                border: 1px solid #249E76;
            }`;
    }
    if (type === 'alarm') {
        return `
            background-color: ${colors.red};
            border-color: ${colors.red};
            color: ${colors.white};
            &:active {
                background-color: #D95D70
            }
            &:hover {
                border-color: #E87385
            }`;
    }
    if (type === 'secondary') {
        return `
            background-color: ${colors.white};
            border-color: ${colors.green};
            color: ${colors.green};
            &:hover {
                color: #fff;
                background: #34B289;
            }
            &:active {
                background: #249E76;
                border: 1px solid #249E76;
            }`;
    }
    if (type === 'white') {
        return `
            background-color: ${colors.white};
            border-color: 1px solid #e5e5e5;
            color: rgba(19, 21, 23, .8);
            &:hover {
                border-color: #DADCDE;
                color: rgba(19, 21, 23, 1);
            }
            &:active {
                background-color: #F8F8F8;
            }`;
    }
    if (type === 'whiteLarge') {
        return `
            background-color: ${colors.white};
            border-color: 1px solid #e5e5e5;
            color: rgba(19, 21, 23, .8);
            min-width: 180px;
            &:hover {
                border-color: #DADCDE;
                color: rgba(19, 21, 23, 1);
            }
            &:active {
                background-color: #F8F8F8;
            }`;
    }
    if (type === 'disabled') {
        return `
            background-color: ${colors.white};
            border-color: 1px solid #e5e5e5;
            color: rgba(19, 21, 23, .25);`;
    }
    if (type === 'transparent') {
        return `
            border: none;
        `;
    }
    return `
        &:active {
            background-color: ${colors.lightGrey}
        }
        &:hover {
            border-color: ${colors.grey}
        }`;
};

export const Default = styled.button`
    border: 1px solid ${colors.lightGrey};
    font-size: 14px;
    background-color: ${colors.white};
    padding: 8px 16px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
`;
