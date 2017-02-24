// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Input from '../shared/Input';
import Button from '../shared/Button'
import Description from '../shared/Description';
import AttachActionBox from '../AttachActionBox';
import TopBar from './TopBar';

import css from './CardDetail.css';

class CardDetail extends Component {
    static propTypes = {
    }
    constructor() {
        super();
        this.state = {
            title: null,
            url: null,
            likes: 0,
            showAttach: false
        };
    }
    componentDidMount() {
        window.addEventListener('mousedown', this.onMouseClick, false);
    }
    componentWillUnmount() {
        window.removeEventListener('mousedown', this.onMouseClick);
    }
    render() {
        const { title, url, likes, showAttach } = this.state;
        return (
            <div className={css.container}>
                <TopBar />
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
                            text="Like"
                            onClick={() => this.setState({ likes: likes + 1 })}
                            type="like"
                            value={likes}
                        />
                        <div>
                            <Button
                                text="Attachment"
                                onClick={() => this.setState({ showAttach: !showAttach })}
                            />
                            {showAttach &&
                                <AttachActionBox
                                    close={() => this.setState({ showAttach: false })}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardDetail;
