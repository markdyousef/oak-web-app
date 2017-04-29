// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles';

const Container = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Bar = styled.div`
    margin-top: 2px;
    position: fixed;
    width: 80%;
    height: 30px;
    min-width: 400px;
    z-index: 9999;
    background-color: ${props => props.error ? colors.orange : colors.green};
    border-radius: 3px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${colors.white};
    padding: 0 20px;
    justify-content: space-between;
`;

const Message = styled.div`
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: center;
    & button {
        background-color: transparent;
        border: none;
        font-weight: bold;
        color: #fff;
        font-size: 14px;
        font-family: 'proxima nova';
        cursor: pointer;
    }
`;

export const Close = styled.div`
    cursor: pointer;
    background-color: transparent;
    font-size: 30px;
    font-weight: normal;
    color: ${colors.white}
`;

type Props = {
    message: {
        type?: string,
        message?: string,
        onClick?: () => void
    },
    onClose: () => void
};

type State = {};

type DefaultProps = {};

export default class Toast extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    state: State;
    props: Props;
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { message: { type, message, onClick }, onClose } = this.props;
        return (
            <Container>
                <Bar error={(type === 'error')}>
                    <Message>
                        <h3>{message}</h3>
                        <button onClick={onClick}>
                            Try again...
                        </button>
                    </Message>
                    <Close onClick={onClose}>
                        &times;
                    </Close>
                </Bar>
            </Container>
        );
    }
}
