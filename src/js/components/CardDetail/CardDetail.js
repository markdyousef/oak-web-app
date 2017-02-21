// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Input from '../shared/Input';
import Button from '../shared/Button'
import Description from '../shared/Description';
import LabelsActionBox from '../LabelsActionBox';

import css from './CardDetail.css';

class CardDetail extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired
    }
    constructor() {
        super();
        this.onMouseClick = this.onMouseClick.bind(this);
        this.state = {
            title: null,
            url: null,
            likes: 0,
            showLabels: false,
            showAttach: false
        };
    }
    componentDidMount() {
        window.addEventListener('mousedown', this.onMouseClick, false);
    }
    componentWillUnmount() {
        window.removeEventListener('mousedown', this.onMouseClick);
    }
    onMouseClick(event) {
        const { close } = this.props;
        if (event.path.filter(item => item.className === 'detail').length === 0) {
            close();
        }
    }
    render() {
        const { close } = this.props;
        const { title, url, likes, showLabels, showAttach } = this.state;
        return (
            <div className={css.modal}>
                <div className="detail">
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
                                    text="Like"
                                    onClick={() => this.setState({ likes: likes + 1 })}
                                    type="like"
                                    value={likes}
                                />
                                <Button
                                    text="Labels"
                                    onClick={() => this.setState({ showLabels: !showLabels })}
                                />
                                {showLabels && <LabelsActionBox close={() => this.setState({ showLabels: false })} />}
                                <Button
                                    text="Attachment"
                                    onClick={() => this.setState({ showAttach: !showAttach })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardDetail;
