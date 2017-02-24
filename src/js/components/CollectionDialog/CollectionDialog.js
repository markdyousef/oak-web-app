import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';

import css from './CollectionDialog.css';

class CollectionDialog extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired,
        create: PropTypes.func.isRequired
    }
    static defaultProps = {}
    constructor() {
        super();
        this.onSave = this.onSave.bind(this);
        this.state = {
            name: '',
            message: ''
        };
    }
    onSave() {
        const { name } = this.state;
        const { create, close } = this.props;
        create(name)
            .then(() => close())
            .catch(err => console.log(err))
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
                            onClick={this.onSave}
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
