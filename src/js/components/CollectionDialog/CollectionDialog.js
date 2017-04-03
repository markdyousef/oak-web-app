import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Input from '../shared/Input';
import Button from '../shared/Button';
import TextField from '../shared/TextField';
import colors from '../../styles/colors';

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

const Header = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    & h1 {
        font-size: 16px;
        font-weight: bold;
    }
`;

const Close = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    font-size: 14px;
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
        create: PropTypes.func.isRequired,
        update: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired,
        name: PropTypes.string,
        description: PropTypes.string,
        editMode: PropTypes.bool,
        id: PropTypes.string,
        router: PropTypes.shape({
            replace: PropTypes.func
        })
    }
    static defaultProps = {
        name: '',
        description: '',
        editMode: false,
        id: null,
        router: null
    }
    constructor(props) {
        super(props);
        this.state = {
            name: props.name || '',
            description: props.description || '',
            image: null,
            message: ''
        };
    }
    onSave = () => {
        const { name, description } = this.state;
        const { create, update, close, editMode, id } = this.props;

        if (editMode) {
            update(id, name, description)
                .then(() => close())
                .catch(err => console.log(err));
        } else {
            create(name, description)
                .then(() => close())
                .catch(err => console.log(err));
        }
    }
    onDelete = () => {
        const { id, remove, router } = this.props;

        remove(id)
            .then(() => router.replace('/'))
            .catch(err => console.log(err))
    }
    render() {
        const { close, editMode } = this.props;
        const { name, description } = this.state;
        return (
            <Container>
                <Modal>
                    <Header>
                        <h1>Add/Edit collection: </h1>
                        <Close onClick={close}>X</Close>
                    </Header>
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
                        {(editMode) ?
                            <Button
                                onClick={this.onDelete}
                                text="Delete"
                                type="alarm"
                            />
                            :
                            <Button
                                onClick={close}
                                text="Cancel"
                            />
                        }
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
