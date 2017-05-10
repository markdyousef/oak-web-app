// @flow
import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    font-size: 24px;
    border: 0;
    padding-bottom: 10px;
`;

export default ({ onChange, name, placeholder, readOnly }) => (
    <Input
        onChange={event => onChange(event.target.value)}
        value={name}
        placeholder="Titel"
        readOnly={readOnly}
    />
);
