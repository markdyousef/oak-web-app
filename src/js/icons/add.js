// @flow
import React from 'react';

export default ({ ...props }:Object):Object => {
    return (
        <svg {...props} height="16" width="16" viewBox="0 0 16 16">
            <path
                d="M8,0a8,8,0,1,0,8,8A8.013,8.013,0,0,0,8,0ZM8,14.9A6.9,6.9,0,1,1,14.9,8,6.915,6.915,0,0,1,8,14.9Z" transform="translate(-0.003 -0.003)"
            />
            <path
                d="M11.517,8a.549.549,0,0,1-.548.548H8.548v2.421a.548.548,0,1,1-1.1,0V8.547H5.031a.548.548,0,0,1,0-1.1H7.452V5.031a.548.548,0,1,1,1.1,0V7.452h2.421A.55.55,0,0,1,11.517,8Z" transform="translate(-0.003 -0.003)"
            />
        </svg>
    );
};
