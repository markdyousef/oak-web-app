// @flow
import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';

import css from './CardDetail.css';

class CardDetail extends Component {
    constructor() {
        super();
        this.state = {
            title: null
        };
    }
    render() {
        const { close } = this.props;
        const { title } = this.state;
        return (
            <div className={css.modal}>
                <div className={css.container}>
                    <div onClick={() => close()}>X</div>
                    <div className={css.inputs}>
                        <Input
                            title="TITLE"
                            onChange={(value: String) => this.setState({ title: value })}
                            value={title || ''}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CardDetail;
