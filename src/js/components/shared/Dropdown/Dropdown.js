// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';

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
    box-shadow: 1px 3px 7px rgba(32, 33, 35, 0.05);
    width: 100%;
    background-color: #fff;
    border: 1px solid #efefef;
    border-radius: 3px;
    padding: 20px;
    & a {
        color: #000;
        display: block;
        margin-top: 10px;
        font-size: 16px;
        font-family: 'Proxima Nova'
    }
`;

const Dropdown = ({ children, arrowPos }:Object) => {
    let style;
    switch (arrowPos) {
    case 'left':
        style = { left: '25px' };
        break;
    default:
        style = { right: '25px' };
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
};

Dropdown.propTypes = {
    children: PropTypes.node,
    arrowPos: PropTypes.string
};

Dropdown.defaultProps = {
    children: null,
    arrowPos: null
};

export default Dropdown;
