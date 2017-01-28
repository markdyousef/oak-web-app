import React, { PropTypes, Component } from 'react';

import css from './Toolbar.css';

class Filter extends Component {
    static propTypes = {
        placeholder: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired
        })).isRequired
    };
    constructor() {
        super();
        this.renderOptionList = this.renderOptionList.bind(this);
        this.state = {
            selectedName: null
        }
    }
    renderOptionList() {
        const { options } = this.props;
    }
    render() {
        const { selectedName } = this.state;
        const { placeholder } = this.props;
        return (
            <div className={css.filter}>
                <div className={css.selected}>
                    {(selectedName) || placeholder }
                </div>
                <div className={css.optionList}>
                    {this.renderOptionList()}
                </div>
            </div>
        );
    }
}

export default Filter;
