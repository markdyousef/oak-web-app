// @flow
import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';

import css from './AttachActionBox.css';

class AttachActionBox extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired
    }
    static defaultProps = {}
    constructor() {
        super();
        this.state = {
            url: ''
        };
    }
    render() {
        const { url } = this.state;
        const { close } = this.props;
        return (
            <div className={css.container}>
                <header>
                    <h3>Attach from...</h3>
                </header>
                <div className={css.link}>
                    <Input
                        title="URL"
                        value={url}
                        placeholder="www.clai.io"
                        onChange={value => this.setState({ url: value })}
                    />
                </div>
                <div>
                    <Button
                        onClick={close}
                        text="Attach"
                        type="primary"
                    />
                </div>
            </div>
        );
    }
}

export default AttachActionBox;
