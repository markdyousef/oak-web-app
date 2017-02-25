import React, { Component, PropTypes } from 'react';
import TopNav from '../../components/TopNav';
import Button from '../../components/shared/Button';

import css from './Settings.css';

const signOut = () => delete localStorage.authToken;

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
            path: '/login'
        })
    }
    render() {
        return (
            <div className={css.container}>
                <TopNav />
                <div className={css.settings}>
                    <h1>Settings:</h1>
                    <Button
                        onClick={() => signOut()}
                        text="Sign out"
                    />
                </div>
            </div>
        );
    }
}

export default Settings;
