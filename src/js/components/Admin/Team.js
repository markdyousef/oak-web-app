// @flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Container = styled.div `
    height: 100%;
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-wrap: wrap;
    flex-grow: 0;
    flex-direction: column;
    text-align: left;
    width: 100%;
    & div {
        width: 100%;
        border-bottom: 1px solid #fff;
        padding: 16px 0;
        font-size: 40px;
        font-weight: 300;
        color: #fff;
    }
    & p {
        font-size: 14px;
        font-style: italic;
        padding-top: 12px;
        color: #fff;
    }
`;

const Submit = styled.button `
    position: absolute;
    bottom: 80px;
    right: 80px;
    background: #fff;
    font-size: 20px;
    font-weight: bold;
    color: #34B289;
    border-radius: 3px;
    z-index: 9999;
    display: block;
    border: none;
    padding: 16px 32px;
    cursor: pointer;
    &:active {
        opacity: 0.8;
    }
`;


const Team = ({ team, onSelect }:Object) => {
    return (
        <div>
            <Container>
                <div>
                {team.name}
                </div>
                <p>
                    Team name
                </p>
            </Container>
            <Submit onClick={onSelect}>
                <span>Sign in to {team.name}</span>
            </Submit>
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
