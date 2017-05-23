// @flow
import React, { Component } from 'react';
import ReactGA from 'react-ga';


export default (ActionBar: Function) => {
    return (
        class AnalyticsWrapper extends Component {
            trackEvent = (type: string, value?: any) => {
                console.log(value);
                ReactGA.event({
                    category: 'Card',
                    action: type,
                    label: String(value)
                });
            }
            trackModal = (type:string) => {
                ReactGA.modalview(type);
            }
            setUser = (user: Object) => {
                ReactGA.set(user);
            }
            render() {
                return (
                    <ActionBar
                        trackEvent={this.trackEvent}
                        trackModal={this.trackModal}
                        setUser={this.setUser}
                        {...this.props}
                    />
                );
            }
        }
    );
};
