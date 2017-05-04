// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';

const Container = styled.div`
    width: 200px;
    height: 100px;
    & h3 {
        font-size: 18px;
    }
`;

const Select = styled.select`
    margin: 15px 0;
    width: 100%;
`;

const Footer = styled.div`
    border-top: 1px solid ${colors.lightGrey};
    width: 100%;
    height: 50px;
    position: relative;
    & button {
        position: absolute;
        right: 0;
        margin-top: 20px;
        color: ${colors.green};
        border: none;
        padding: 0;
        background-color: ${colors.white};
        font-size: 14px;
        cursor: pointer;
    }
`;


type DefaultProps = {};

type Props = {
    collectionId: ?string
};

type State = {};

export default class CreateCard extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    props: Props;
    state: State;
    constructor(props: Props) {
        super(props);
        this.state = {
            collection: props.collectionId || null
        };
    }
    render() {
        const { collections, addCard } = this.props;
        const { collection } = this.state;
        return (
            <Container>
                <h3>Create Card in:</h3>
                <Select
                    value={collection || ''}
                    onChange={event => this.setState({ collection: event.target.value })}
                >
                    <option value="" selected>Select Collection</option>
                    {collections.map(item =>
                        <option
                            key={item.id}
                            value={item.id}
                        >
                            {item.name}
                        </option>
                    )}
                </Select>
                <Footer>
                    {collection &&
                    <button onClick={addCard}>
                        Start Creating
                    </button>}
                </Footer>
            </Container>
        );
    }
}
