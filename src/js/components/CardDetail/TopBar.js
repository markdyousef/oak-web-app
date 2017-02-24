import React, { PropTypes, Component } from 'react';
import LabelsActionBox from '../LabelsActionBox';
import Button from '../shared/Button';

import css from './CardDetail.css';

class TopBar extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired,
        save: PropTypes.func.isRequired,
        showEdit: PropTypes.bool.isRequired,
        edit: PropTypes.func.isRequired
    };
    constructor() {
        super();
        this.renderButtons = this.renderButtons.bind(this);
        this.state = {
            showLabels: false
        };
    }
    renderButtons() {
        const { save, showEdit, edit } = this.props;
        const { showLabels } = this.state;

        if (showEdit) {
            return (
                <div className={css.editNav}>
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
                        onClick={save}
                        type="primaryAction"
                    />
                </div>
            );
        }
        return <Button text="Edit card" type="secondaryAction" onClick={edit} />;
    }
    render() {
        const { close } = this.props;
        return (
            <div className={css.topBar}>
                <div className={css.right}>
                    {this.renderButtons()}
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
