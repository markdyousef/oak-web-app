import React, { Component, PropTypes } from 'react';
import Button from '../../components/shared/Button';
import { signOut } from '../../utils'

import css from './Settings.css';

class Settings extends Component {
    static propTypes = {
        router: PropTypes.shape({
            replace: PropTypes.func
        }).isRequired
    }
    constructor() {
        super();
        this.signOut = this.signOut.bind(this);
        this.state = {};
    }
    signOut() {
        const { router } = this.props;
        signOut();
        router.replace({
            pathname: '/login'
        })
    }
    render() {
        return (
            <div className={css.container}>
                <div className={css.settings}>
                    <h1>Settings:</h1>
                    <Button
                        onClick={this.signOut}
                        text="Sign out"
                    />
                </div>
            </div>
        );
    }
}

export default Settings;
