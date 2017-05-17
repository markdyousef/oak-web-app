// @flow
import React, { Component } from 'react';
import Input from '../shared/Input';
import { SquareButton } from '../shared/Button';
import TextField from '../shared/TextField';
import { uploadImage } from '../../utils';
import { Container, Modal, Header, Intro, InputWrapper, InputLabels, Close, Main, Upload, Buttons } from './styles'
import Toast from '../shared/Toast';
import placeholder from '../../../img/collections-placeholder.svg';

type DefaultProps = {
    name: '',
    description: '',
    editMode: false,
    id: null,
    router: null,
    picture: null,
    pictureId: null
};

type Props = {
    close: () => void,
    create: (name: string, description: ?string) => Object,
    update: (id: string, name: ?string, description: ?string, coverId: ?string) => Object,
    remove: (id: string) => Object,
    name: ?string,
    description: ?string,
    editMode: ?bool,
    id: ?string,
    picture: ?string,
    pictureId: ?string,
    router: {
        replace: Function
    }
};

type State = {
    id: ?string,
    name: string,
    description: string,
    picture: ?string,
    message: ?Object,
    file: ?Object,
    editMode: ?bool,
    pictureId: ?string,
    didUpload: bool,
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
            picture: props.picture,
            message: null,
            file: null,
            editMode: props.editMode,
            pictureId: props.pictureId,
            didUpload: false,
            isLoading: false
        };
    }
    onSave = () => {
        const { id, name, description, file, editMode, pictureId, didUpload } = this.state;
        const { create, update, close } = this.props;

        if (name.length < 1) {
            this.setState({
                isLoading: false,
                message: {
                    type: 'error',
                    message: 'Remember to name your collection',
                    onClick: this.onSave
                }
            });
            return;
        }

        this.setState({ isLoading: true });
        // handle file-upload for existing collection
        if (file && !didUpload) {
            uploadImage(file, 'grove', id)
                .then((res) => {
                    this.setState({ pictureId: res.id, didUpload: true });
                    this.onSave();
                })
                .catch(() => {
                    this.setState({
                        message: {
                            type: 'error',
                            message: "Sorry, we couldn't upload your image",
                            onClick: this.onSave
                        },
                        isLoading: false
                    })
                });
            return;
        }
        if (editMode && id) {
            update(id, name, description, pictureId)
                .then(() => {
                    this.setState({ isLoading: false });
                    close();
                })
                .catch(() => {
                    this.setState({
                        message: {
                            type: 'error',
                            message: "Sorry, we couldn't save your collection",
                            onClick: this.onSave
                        },
                        isLoading: false
                    })
                });
        } else {
            create(name, description, pictureId)
                .then(() => {
                    this.setState({ isLoading: false })
                    close()
                })
                .catch(() => {
                    this.setState({
                        message: {
                            type: 'error',
                            message: "Sorry, we couldn't save your collection",
                            onClick: this.onSave
                        },
                        isLoading: false
                    })
                });
        }
    }
    onClick = () => {
        this.input.value = '';
        this.input.click();
    }
    onChange = (e: Event) => {
        e.preventDefault();
        const file = e.target.files[0];
        const url = window.URL.createObjectURL(file);
        this.setState({ picture: url, file });
    }
    render() {
        const { close } = this.props;
        const { name, description, picture, isLoading, message } = this.state;
        return (
            <Container>
                <Modal>
                    <Header>
                        <h1>Add/Edit collection: </h1>
                        <Close onClick={close}>&times;</Close>
                    </Header>
                    {message && <Toast
                        message={message}
                        style={{ width: '150px' }}
                        onClose={() => this.setState({ message: null })}
                    />}
                    <Main>
                        {/* <Upload onClick={this.onClick}>
                            <img src={picture || placeholder} alt="cover" />
                            <input
                                type="file"
                                accept="image/*"
                                ref={(c) => { this.input = c; }}
                                onChange={this.onChange}
                                style={{ display: 'none' }}
                            />
                        </Upload> */}
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
