import React, { Component, PropTypes } from 'react';

import css from './CardDetail.css';

class CardDetail extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { close } = this.props;
        return (
            <div className={css.modal}>
                <div className={css.container}>
                    <div onClick={() => close()}>X</div>
                </div>
            </div>
        );
    }
}

export default CardDetail;
