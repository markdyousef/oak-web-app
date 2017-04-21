// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Input from '../../components/shared/Input';
import { SquareButton } from '../../components/shared/Button';

const Container = styled.div`
    display: flex;
    width: 450px;
`;


const CreateTeam = ({ teamName, onChange, onSubmit }:Object) => {
    return (
        <div>
            <h1>Create a new team</h1>
            <Container>
                <Input
                    value={teamName}
                    placeholder="Clai"
                    onChange={onChange}
                />
                <SquareButton
                    onClick={onSubmit}
                    text="Create"
                    type="primary"
                />
            </Container>
        </div>
    );
};

CreateTeam.propTypes = {
    teamName: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

CreateTeam.defaultProps = {
    teamName: null
};


export default CreateTeam;
