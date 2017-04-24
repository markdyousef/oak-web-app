import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { SquareButton } from '../../components/shared/Button';
import { uploadImg } from '../../utils';

const Container = styled.div`
    display: flex;
    padding: 20px;
    border: 1px solid ${colors.lightGrey};
    background: ${colors.white};
    border-radius: 3px;
    flex-wrap: wrap;
`;

const Avatar = styled.div`
    height: 100px;
    width: 100px;
    margin-right: 20px;
    & img {
        width: 100%;
        height: 100%;
        border-radius: 999em;
    }
`;

const Upload = styled.div`
    width: 60%;
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
        uploadImg(file, 'avatar')
            .then(id => onChange('avatar', { id, url }))
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
                    <p>
                        Upload a clear frontal face picture of yourself
                        to give your teammates a more clear identification of you.
                    </p>
                    <SquareButton
                        text="Upload a file"
                        onClick={this.onClick}
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
