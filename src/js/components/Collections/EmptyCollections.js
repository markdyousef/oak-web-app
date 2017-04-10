// @flow
import React from 'react';
import styled from 'styled-components';
import Button from '../shared/Button';
import empty from '../../../img/collections-empty-state.svg';

const Empty = ({ onClick }:Object) => {
    return (
        <div>
            <img src={empty} alt="empty state" />
        </div>
    );
}

export default Empty;
