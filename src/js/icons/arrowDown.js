// @flow
import React from 'react';

export default ({ ...props }:Object):Object => {
    return (
        <svg {...props} width="12" height="12" viewBox="0 0 16 16">
            <path
                d="M15.852 3.89c-.198-.198-.519-.198-.717 0l-7.144 7.145L.865 3.909c-.198-.198-.519-.198-.717 0s-.198.519 0 .717l7.484 7.484c.095.095.224.149.359.149s.264-.054.359-.148l7.503-7.503c.196-.199.196-.52-.001-.718z"
            />
        </svg>
    );
};
