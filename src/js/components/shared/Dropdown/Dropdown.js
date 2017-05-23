// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import withLayer from '../Layer';

const Arrow = styled.div`
    height: 14px;
    width: 14px;
    border-top: 1px solid #E5E5E5;
    border-left: 1px solid #E5E5E5;
    background: var(--white);
    position: absolute;
    top: -7px;
    transform: rotate(45deg);
    background-color: #fff;
`;

const Menu = styled.div`
    display: block;
    box-shadow: 1px 3px 7px rgba(32, 33, 35, 0.08);
    width: 100%;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    padding: 20px;
    margin-top: 0px;
    & a {
        color: #000;
        display: block;
        margin-top: 16px;
        font-size: 16px;
    }
    & a:first-child {
        margin-top: 0;
    }
`;

type Props = {
    children?: Object,
    arrowPos?: string,
    onClose?: () => void
}


export default withLayer(({ children, arrowPos }: Props) => {
    let style;
    switch (arrowPos) {
    case 'left':
        style = { left: '24px' };
        break;
    case 'moreleft':
        style = { left: '48px' };
        break;
    case 'none':
        style = { display: 'none' };
        break;
    default:
        style = { right: '16px' };
        break;
    }
    return (
        <div>
            <Arrow style={style} />
            <Menu>
                {children}
            </Menu>
        </div>
    );
})
