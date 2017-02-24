// @flow
import React, { Component, PropTypes } from 'react';
import Description from '../shared/Description';
import TopBar from './TopBar';

import css from './CardDetail.css';

class CardDetail extends Component {
    static propTypes = {
        router: PropTypes.shape({
            goBack: PropTypes.func.isRequired
        }).isRequired
    }
    constructor() {
        super();
        this.onSave = this.onSave.bind(this);
        this.state = {
            showEdit: false
        };
    }
    onSave() {
        this.setState({ showEdit: false });
    }
    render() {
        const { showEdit } = this.state;
        const { router } = this.props;
        return (
            <div className={css.container}>
                <TopBar
                    close={() => router.goBack()}
                    save={this.onSave}
                    showEdit={showEdit}
                    edit={() => this.setState({ showEdit: true })}
                />
                <div className={css.main}>
                    {/* <div className={css.description}>
                        <Description />
                    </div> */}
                </div>
            </div>
        );
    }
}

export default CardDetail;
