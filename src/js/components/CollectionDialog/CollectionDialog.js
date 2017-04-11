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
    ${''/* height: 350px; */}
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

const Upload = styled.div`
    height: 100px;
    border: 1px solid ${colors.lightGrey};
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    & div {
        margin: 0;
        height: 80px;
        width: 100px;
        background-color: ${colors.lightGrey};
        border-radius: 3px;
    }
    & img {
        height: 100%;
        width: 100%;
        border-radius: 3px;
    }
`;

const Buttons = styled.div`
    padding: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const URL = 'https://empress.clai.io/files/upload';

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
        picture: PropTypes.string,
        pictureId: PropTypes.string,
        router: PropTypes.shape({
            replace: PropTypes.func
        })
    }
    static defaultProps = {
        name: '',
        description: '',
        editMode: false,
        id: null,
        router: null,
        picture: null,
        pictureId: null
    }
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name || '',
            description: props.description || '',
            picture: props.picture,
            message: '',
            file: null,
            editMode: props.editMode,
            pictureId: props.pictureId
        };
    }
    onSave = () => {
        const { id, name, description, file, editMode, pictureId } = this.state;
        const { create, update, close } = this.props;

        if (editMode) {
            update(id, name, description, pictureId)
                .then(() => close())
                .catch(err => console.log(err));
        } else {
            create(name, description)
                .then((res) => {
                    if (file) {
                        const { createGrove } = res.data;
                        this.onUpload(createGrove.id, file, true);
                        this.setState({ editMode: true, id: createGrove.id });
                    } else {
                        close()
                    }
                })
                .catch(err => console.log(err));
        }
    }
    onDelete = () => {
        const { id, remove, router } = this.props;

        remove(id)
            .then(() => router.replace('/'))
            .catch(err => console.log(err));
    }
    onClick = () => {
        this.input.value = null;
        this.input.click();
    }
    onChange = (e) => {
        const { editMode, id } = this.props;
        e.preventDefault();
        const file = e.target.files[0];
        const url = window.URL.createObjectURL(file);
        this.setState({ picture: url, file });

        // if collection alrady exists
        if (editMode) {
            this.onUpload(id, file);
        }
    }
    onUpload = (id, file, save) => {
        // // check file type
        if (file.type.indexOf('image/') === 0) {
            const body = new FormData();
            body.append('file', file);
            body.append('type', 'grove');
            body.append('groveId', id);
            const token = localStorage.authToken;
            const options = {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body
            };
            fetch(URL, options)
                .then(res => res.json())
                .then(res => this.setState({ pictureId: res.id }))
                .then(() => {
                    if (save) this.onSave();
                })
                .catch(err => console.log(err));
        }
    }
    render() {
        const { close, editMode } = this.props;
        const { name, description, picture } = this.state;
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
                            <Button
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
