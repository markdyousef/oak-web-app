// @flow
import React from 'react';

export default ({ ...props }:Object):Object => {
    return (
        <svg {...props} width="16" height="16" viewBox="0 0 16 16">
            <g>
                <path
                    d="M10.9,2.8l4.8,4.8c0.1,0.1,0.1,0.2,0.1,0.4s-0.1,0.3-0.1,0.4l-4.8,4.8c-0.2,0.2-0.5,0.2-0.7,0s-0.2-0.5,0-0.7l4-4H0.6
                    C0.3,8.5,0.1,8.3,0.1,8s0.2-0.5,0.5-0.5h13.6l-4-4C10,3.3,10,3,10.2,2.8S10.7,2.6,10.9,2.8z"
                />
            </g>
        </svg>
    );
};
