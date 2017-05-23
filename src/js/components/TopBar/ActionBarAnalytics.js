// @flow
import React, { Component } from 'react';
import ReactGA from 'react-ga';


export default (ActionBar: Function) => {
    return (
        class AnalyticsWrapper extends Component {
            track = (type: string) => {
                ReactGA.event({
                    category: 'Card',
                    action: type
                });
            }
            render() {
                return (
                    <ActionBar
                        track={this.track}
                        {...this.props}
                    />
                );
            }
        }
    );
};
