import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 5px;
`;

const AtomicBlock = ({ ...props }:Object) => {
    const { block, blockProps } = props;
    const data = block.getData().toJS();
    if (blockProps.components[data.type]) {
        const Component = blockProps.components[data.type];
        return (
            <Container>
                <Component data={data} />
            </Container>
        );
    }

    return null;
};

AtomicBlock.propTypes = {
    block: PropTypes.shape({
        getEntityAt: PropTypes.func,
        getData: PropTypes.func
    }).isRequired,
    blockProps: PropTypes.shape({
        components: PropTypes.object
    }).isRequired,
    contentState: PropTypes.shape({
        getEntity: PropTypes.func
    }).isRequired
};

export default AtomicBlock;
