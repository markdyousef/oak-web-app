import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Input from '../shared/Input';
import Button from '../shared/Button';
import TextField from '../shared/TextField';
import colors from '../../styles/colors';

import css from './CollectionDialog.css';

const Container = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Modal = styled.div`
    width: 400px;
    height: 350px;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h1`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 16px;
    font-weight: bold;
`;

const Main = styled.div`
    padding: 5px 20px;
    width: 100%;
    & div {
        margin-top: 20px;
    }
`;

const Buttons = styled.div`
    padding: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

class CollectionDialog extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired,
        create: PropTypes.func.isRequired
    }
    static defaultProps = {}
    constructor() {
        super();
        this.onSave = this.onSave.bind(this);
        this.state = {
            name: '',
            description: '',
            image: null,
            message: ''
        };
    }
    onSave() {
        const { name } = this.state;
        const { create, close } = this.props;
        create(name)
            .then(() => close())
            .catch(err => console.log(err))
    }
    render() {
        const { close } = this.props;
        const { name, description } = this.state;
        return (
            <Container>
                <Modal>
                    <Title>Add/Edit collection: </Title>
                    <Main>
                        <Input
                            title="NAME"
                            value={name}
                            onChange={value => this.setState({ name: value })}
                            placeholder="Name"
                        />
                        <TextField
                            title="DESCRIPTION"
                            value={description}
                            onChange={value => this.setState({ description: value })}
                            placeholder="Description"
                        />
                    </Main>
                    <Buttons>
                        <Button
                            onClick={close}
                            text="Cancel"
                        />
                        <Button
                            onClick={this.onSave}
                            text="Save"
                            type="primary"
                        />
                    </Buttons>
                </Modal>
            </Container>
        );
    }
}

export default CollectionDialog;
