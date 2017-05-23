// @flow
import React, { Component } from 'react';
import Input from '../shared/Input';
import { SquareButton } from '../shared/Button';
import TextField from '../shared/TextField';
import { Container, Modal, Header, Intro, InputWrapper, InputLabels, Close, InputName, Main, Upload, Buttons } from './styles'
import Toast from '../shared/Toast';

type DefaultProps = {
    name: '',
    description: '',
    editMode: false,
    id: null,
    router: null
};

type Props = {
    close: () => void,
    create: (name: string, description: ?string) => Object,
    update: (id: string, name: ?string, description: ?string, coverId: ?string) => Object,
    name: ?string,
    description: ?string,
    editMode: ?bool,
    id: ?string,
    router: {
        replace: Function
    }
};

type State = {
    id: ?string,
    name: string,
    description: string,
    message: ?Object,
    editMode: ?bool,
    isLoading: bool
};

class CollectionDialog extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps;
    state: State;
    input: HTMLInputElement;
    constructor(props: Props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name || '',
            description: props.description || '',
            message: null,
            editMode: props.editMode,
            isLoading: false
        };
    }
    onSave = () => {
        const { id, name, description, editMode } = this.state;
        const { create, update, close } = this.props;

        if (name.length < 1) {
            this.setState({
                isLoading: false,
                message: {
                    type: 'error',
                    message: 'Don\'t forget to name your collection',
                    onClick: this.onSave
                }
            });
            return;
        }

        this.setState({ isLoading: true });
        if (editMode && id) {
            update(id, name, description)
                .then(() => {
                    this.setState({ isLoading: false });
                    close();
                })
                .catch(() => {
                    this.setState({
                        message: {
                            type: 'error',
                            message: "Sorry, we couldn't save your collection, please try again",
                            onClick: this.onSave
                        },
                        isLoading: false
                    })
                });
        } else {
            create(name, description)
                .then(() => {
                    this.setState({ isLoading: false })
                    close()
                })
                .catch(() => {
                    this.setState({
                        message: {
                            type: 'error',
                            message: "Sorry, we couldn't save your collection, please try again",
                            onClick: this.onSave
                        },
                        isLoading: false
                    })
                });
        }
    }
    render() {
        const { close } = this.props;
        const { name, description, isLoading, message } = this.state;
        return (
            <Container>
                <Modal>
                    <Header>
                        <h1>Add/Edit collection</h1>
                        <Close onClick={close}>&times;</Close>
                    </Header>
                    {message && <Toast
                        message={message}
                        style={{ width: '480px' }}
                        onClose={() => this.setState({ message: null })}
                    />}
                    <Main>
                        <Intro>
                            Collections are where your team share posts around a specific topic - like ‘Development’ or ‘Design’.
                        </Intro>
                        <InputWrapper>
                            <InputLabels>
                                Name
                                </InputLabels>
                            <Input
                                value={name}
                                onChange={value => this.setState({ name: value })}
                                placeholder="Name your collection"
                            />
                            <InputName>
                                Name your collection based on it's topic.
                            </InputName>
                        </InputWrapper>
                        <InputWrapper>
                            <InputLabels>
                                Description
                            </InputLabels>
                            <TextField
                                value={description}
                                onChange={value => this.setState({ description: value })}
                                placeholder="Add a description..."
                            />
                            <InputName>
                                Describe the purpose of this collection.
                            </InputName>
                        </InputWrapper>
                    </Main>
                    <Buttons>
                        <SquareButton
                            onClick={close}
                            text="Cancel"
                            type="white"
                        />
                        <SquareButton
                            onClick={this.onSave}
                            text="Save"
                            type="primary"
                            isLoading={isLoading}
                        />
                    </Buttons>
                </Modal>
            </Container>
        );
    }
}

export default CollectionDialog;
