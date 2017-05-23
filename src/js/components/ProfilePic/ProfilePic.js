import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { SquareButton } from '../../components/shared/Button';
import { uploadImage } from '../../utils';

const Container = styled.div`
    display: flex;
    background: ${colors.white};
    border-radius: 3px;
    flex-wrap: wrap;
    padding-top: 24px;
    padding-bottom: 16px;
`;

const Avatar = styled.div`
    height: 100px;
    width: 100px;
    margin-right: 32px;
    & img {
        width: 100%;
        height: 100%;
        border-radius: 999em;
    }
`;

const Upload = styled.div`
    width: calc(100% - 132px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & p {
        font-size: 14px;
        line-height: 17px;
    }
`;

export default class ProfilePic extends Component {
    static propTypes = {
        picture: PropTypes.string,
        onChange: PropTypes.func.isRequired
    }
    static defaultProps = {
        picture: null
    }
    constructor() {
        super();
        this.state = {
            isLoading: false
        };
    }
    onClick = () => {
        this.input.value = null;
        this.input.click();
    }
    onChange = (e) => {
        e.preventDefault();
        const { onChange } = this.props;

        const file = e.target.files[0];
        const url = window.URL.createObjectURL(file);
        // // check file type
        uploadImage(file, 'avatar')
            .then(res => onChange('avatar', { id: res.id, url }))
            .catch(err => console.log(err));
    }
    render() {
        const { picture } = this.props;
        return (
            <Container>
                <Avatar>
                    <img src={picture} alt="avatar" />
                </Avatar>
                <Upload>
                    <label>
                        Clear frontal face pictures is an important way for teammates to identify each other.
                    </label>
                    <SquareButton
                        text="Upload a file"
                        onClick={this.onClick}
                        type="white"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        ref={(c) => { this.input = c; }}
                        onChange={this.onChange}
                        style={{ display: 'none' }}
                    />
                </Upload>
            </Container>
        );
    }
}
