// @flow
import React from 'react';

export default ({ ...props }:Object):Object => {
    return (
        <svg {...props} width="16" height="16" viewBox="0 0 16 16">
            <g>
                <path
                    d="M15.72,6.64L8.34,1.05L8.3,1.02C8.1,0.87,7.84,0.89,7.66,1.05L0.28,6.64c-0.22,0.17-0.26,0.48-0.09,0.7
                    c0.09,0.13,0.24,0.2,0.39,0.2c0.11,0,0.22-0.03,0.31-0.1l0.87-0.66l1.2,7.84c0.04,0.24,0.25,0.42,0.5,0.42h9.08
                    c0.25,0,0.46-0.18,0.5-0.42l1.2-7.85l0.88,0.67c0.09,0.07,0.19,0.1,0.3,0.1c0.15,0,0.3-0.07,0.4-0.2
                    C15.98,7.12,15.94,6.81,15.72,6.64z M8.96,14.04H7.04v-3.33h1.92V14.04z M12.11,14.04H9.96v-3.83c0-0.28-0.23-0.5-0.5-0.5H6.54
                    c-0.27,0-0.5,0.22-0.5,0.5v3.83H3.89L2.66,6.09L8,2.04l5.34,4.05L12.11,14.04z"
                />
            </g>
        </svg>
    );
};