// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Input from '../shared/Input';
import Button from '../shared/Button'
import Description from '../shared/Description';

import css from './CardDetail.css';

class CardDetail extends Component {
    constructor() {
        super();
        this.state = {
            title: null,
            url: null,
            likes: 0
        };
    }
    render() {
        const { close } = this.props;
        const { title, url, likes } = this.state;
        return (
            <div className={css.modal}>
                <div className={css.container}>
                    <div className={css.close} onClick={() => close()}>X</div>
                    <div className={css.main}>
                        <div className={css.leftPane}>
                            <div className={css.name}>
                                <Input
                                    title="TITLE"
                                    onChange={(value: String) => this.setState({ title: value })}
                                    value={title || ''}
                                />
                                <h3>In collection <Link to="/">Design</Link></h3>
                            </div>
                            <div className={css.description}>
                                <Description />
                            </div>
                        </div>
                        <div className={css.rightPane}>
                            <Button
                                text="LIKE"
                                onClick={() => this.setState({ likes: likes + 1 })}
                                type="like"
                                value={likes}
                            />
                            <Button
                                text="LABELS"
                                onClick={() => console.log('attach')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardDetail;
