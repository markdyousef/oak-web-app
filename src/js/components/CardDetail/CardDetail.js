// @flow
import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';

import css from './CardDetail.css';

class CardDetail extends Component {
    constructor() {
        super();
        this.state = {
            title: null,
            url: null
        };
    }
    render() {
        const { close } = this.props;
        const { title, url } = this.state;
        return (
            <div className={css.modal}>
                <div className={css.container}>
                    <div className={css.close} onClick={() => close()}>X</div>
                    <div className={css.main}>
                        <div className={css.leftPane}>
                            <div className={css.inputs}>
                                <Input
                                    title="TITLE"
                                    onChange={(value: String) => this.setState({ title: value })}
                                    value={title || ''}
                                />
                                <Input
                                    title="URL"
                                    onChange={(value: String) => this.setState({ url: value })}
                                    value={url || ''}
                                />
                            </div>
                        </div>
                        <div className={css.rightPane}>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardDetail;
