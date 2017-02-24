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
                    <div className={css.title}>
                        <h1>Add/Edit collection: </h1>
                    </div>
                    <div className={css.main}>
                        <Input
                            title="NAME"
                            value={name}
                            onChange={value => this.setState({ name: value })}
                            placeholder="Name"
                        />
                    </div>
                    <div className={css.buttons}>
                        <Button
                            onClick={close}
                            text="Cancel"
                        />
                        <Button
                            onClick={close}
                            text="Save"
                            type="primary"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CollectionDialog;
