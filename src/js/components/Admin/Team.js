// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-wrap: wrap;
    flex-grow: 0;
    flex-direction: column;
    text-align: left;
    width: 100%;
    color: #fff;
    & div {
        width: 100%;
        padding: 16px 0;
        font-size: 56px;
        font-weight: 300;
        color: #fff;
    }
    & p {
        font-size: 14px;
        font-style: italic;
        color: #fff;
    }
    & nth:child {
        margin-top: 40px;
    }
`;


const Team = ({ team, onSelect }:Object) => {
    return (
        <div>
            <Container onClick={onSelect}>
                <div>
                {team.name}
                </div>
                <p>
                    Team name
                </p>
            </Container>
        </div>
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
