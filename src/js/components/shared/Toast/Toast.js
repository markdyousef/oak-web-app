// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles';
import Close from '../../../icons/close';

const Container = styled.section`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    z-index: 9999999;
`;

const Bar = styled.div`
    position: fixed;
    width: 100%;
    min-width: 400px;
    z-index: 9999;
    background-color: ${props => props.error ? colors.orange : colors.green};
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${colors.white};
    padding: 12px 20px;
    justify-content: space-between;
    & svg {
        cursor: pointer;
    }
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

type Props = {
    message: {
        type?: string,
        message?: string,
        onClick?: () => void
    },
    style?: Object,
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
        const { message: { type, message, onClick }, onClose, style } = this.props;
        return (
            <Container>
                <Bar
                    error={(type === 'error')}
                    style={style}
                >
                    <Message>
                        <h3>{message}</h3>
                    </Message>
                    <Close onClick={onClose} />
                </Bar>
            </Container>
        );
    }
}
