import React, { PropTypes, Component } from 'react';

import css from './Toolbar.css';

class Filter extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired
        })).isRequired,
        select: PropTypes.func.isRequired
    };
    constructor() {
        super();
        this.renderOptionList = this.renderOptionList.bind(this);
        this.state = {
            selected: null,
            isOpen: false
        }
    }
    renderOptionList() {
        const { options, select } = this.props;
        return options.map(option => (
            <div
                key={option.name}
                onClick={() => { select(option.name); this.setState({ isOpen: false }); }}
            >
                <span>{option.name}</span>
            </div>
        ));
    }
    render() {
        const { selected, isOpen } = this.state;
        const { name } = this.props;
        return (
            <div className={css.filter}>
                <div
                    className={css.selected}
                    onClick={() => this.setState({ isOpen: !isOpen })}
                >
                    <span>{(selected) || name }</span>
                </div>
                <div className="filter">
                    {isOpen && <div className={css.optionList}>
                        {this.renderOptionList()}
                    </div>}
                </div>
            </div>
        );
    }
}

export default Filter;
