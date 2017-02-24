import React, { PropTypes, Component } from 'react';
import LabelsActionBox from '../LabelsActionBox';
import Button from '../shared/Button';

import css from './CardDetail.css';

class TopBar extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired
    };
    constructor() {
        super();
        this.state = {
            showLabels: false
        };
    }
    render() {
        const { showLabels } = this.state;
        const { close } = this.props;
        return (
            <div className={css.topBar}>
                <div className={css.right}>
                    <div>
                        <Button
                            text="Add label"
                            onClick={() => this.setState({ showLabels: !showLabels })}
                            type="secondaryAction"
                        />
                        {showLabels &&
                            <LabelsActionBox
                                close={() => this.setState({ showLabels: false })}
                            />
                        }
                    </div>
                    <Button
                        text="Save card"
                        onClick={() => {}}
                        type="primaryAction"
                    />
                    <Button
                        className={css.close}
                        onClick={() => close()}
                        text="X"
                        type="transparent"
                    />
                </div>

            </div>
        );
    }
}


export default TopBar;
