// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Container = styled.button `
    width: 100%;
    max-width: 400px;
    height: 60px;
    background-color: ${colors.white};
    border: 1px solid ${colors.green};
    border-radius: 3px;
    font-size: 15px;
    margin: 5px;
    cursor: pointer;
`;


const Team = ({ team, onSelect }:Object) => {
    return (
        <Container onClick={onSelect}>
            {team.name}
        </Container>
    );
};

Team.propTypes = {
    team: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Team;
