// @flow
import React from 'react';
import styled from 'styled-components';
import Button from '../shared/Button';
import empty from '../../../img/comments-empty-state.svg';

const Empty = ({ onClick }:Object) => {
    console.log('no cards');
    return (
        <div>
            <img src={empty} alt="empty state" />
        </div>
    );
}

export default Empty;
