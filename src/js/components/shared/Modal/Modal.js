import React from 'react';
import styled from 'styled-components';
import withLayer from '../Layer';

const Modal = styled.div`
    width: 480px;
    background-color: #fff;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 10px rgba(19, 21, 23, 0.25);
`;

export default withLayer(({ onClose, children }) => (
    <Modal onClose={onClose}>
        {children}
    </Modal>
));
