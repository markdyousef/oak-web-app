// @flow
import React, { Component } from 'react';
import Input from '../shared/Input';
import { SquareButton } from '../shared/Button';
import TextField from '../shared/TextField';
import { uploadImage } from '../../utils'
import { Container, Modal, Header, Close, Main, Upload, Buttons } from './styles';

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
    message: ?string,
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
            message: '',
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
        this.setState({ isLoading: true })

        // handle file-upload for existing collection
        if (file && !didUpload) {
            uploadImage(file, 'grove', id)
                .then((res) => {
                    this.setState({ pictureId: res.id, didUpload: true });
                    this.onSave();
                })
                .catch(err => console.log(err));
            return;
        }
        if (editMode && id) {
            update(id, name, description, pictureId)
                .then(() => {
                    this.setState({ isLoading: false })
                    close();
                })
                .catch(err => console.log(err));
        } else {
            create(name, description, pictureId)
                .then(() => {
                    this.setState({ isLoading: false })
                    close()
                })
                .catch(err => console.log(err));
        }
    }
    onDelete = () => {
        const { id, remove, router } = this.props;
        if (id) {
            remove(id)
                .then(() => router.replace('/'))
                .catch(err => console.log(err));
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
        const { close, editMode } = this.props;
        const { name, description, picture, isLoading } = this.state;
        return (
            <Container>
                <Modal>
                    <Header>
                        <h1>Add/Edit collection: </h1>
                        <Close onClick={close}>X</Close>
                    </Header>
                    <Main>
                        <Upload>
                            <div>
                                {picture && <img src={picture} alt="cover" />}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                ref={(c) => { this.input = c; }}
                                onChange={this.onChange}
                                style={{ display: 'none' }}
                            />
                            <SquareButton
                                text="Add Cover"
                                onClick={this.onClick}
                            />
                        </Upload>
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
                            <SquareButton
                                onClick={this.onDelete}
                                text="Delete"
                                type="alarm"
                            />
                            :
                            <SquareButton
                                onClick={close}
                                text="Cancel"
                            />
                        }
                        <SquareButton
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
