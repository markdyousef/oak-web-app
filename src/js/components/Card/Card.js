import React, { Component, PropTypes } from 'react';

import css from './Card.css';

class Card extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { title } = this.props;
        return (
            <div className={css.container}>
                <div className={css.content}>
                    <h1>{title}</h1>
                </div>
            </div>
        );
    }
}

export default Card;
