import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';

import css from './CollectionDialog.css';

class CollectionDialog extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired
    }
    static defaultProps = {}
    constructor() {
        super();
        this.state = {
            name: ''
        };
    }
    render() {
        const { close } = this.props;
        const { name } = this.state;
        return (
            <div className={css.modal}>
                <div className={css.container}>
                    <div className={css.close} onClick={() => close()}>X</div>
                    <div className={css.main}>
                        <Input
                            title="NAME"
                            value={name}
                            onChange={value => this.setState({ name: value })}
                        />
                    </div>
                    <Button
                        onClick={close}
                        text="Create"
                        type="primary"
                    />
                </div>
            </div>
        );
    }
}

export default CollectionDialog;
