// @flow
import React from 'react';

export default ({ ...props }:Object):Object => {
    return (
        <svg {...props} viewBox="0 0 16 16" fill="rgba(19, 21, 23, 0.85)">
            <circle cx="3" cy="8.079" r="1.5"/>
            <circle cx="8.01" cy="8.079" r="1.5"/>
            <circle cx="12.998" cy="8.079" r="1.5"/>
        </svg>
    );
};
