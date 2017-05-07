import styled from 'styled-components';
import colors from '../../../styles/colors';

export const style = (type) => {
    if (type === 'primary') {
        return `
            background-color: ${colors.green};
            border-color: ${colors.green};
            color: ${colors.white};
            &:active {
                background-color: #57B188
            }
            &:hover {
                border-color: ${colors.green}
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
            &:active {
                background-color: #57B188
            }
            &:hover {
                border-color: ${colors.green}
            }`;
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
    padding: 8px 24px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
`;
