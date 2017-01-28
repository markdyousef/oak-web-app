import React, { Component, PropTypes } from 'react';
import Filter from './Filter';

import css from './Toolbar.css';

class ToolBar extends Component {
    static propTypes = {
        data: PropTypes.shape({
            filters: PropTypes.arrayOf(PropTypes.shape({
                name: PropTypes.string.isRequired,
                id: PropTypes.string,
                options: PropTypes.arrayOf(PropTypes.object)
            }))
        })
    }
    constructor() {
        super();
        this.renderFilterOptions = this.renderFilterOptions.bind(this);
        this.state = {}
    }
    renderFilterOptions() {
        const { data } = this.props;
        if (data && data.filters) {
            return data.filters.map(filter => (
                <Filter filter={filter} />
            ));
        }
    }
    render() {
        return (
            <div className={css.container}>
                {this.renderFilterOptions()}
            </div>
        );
    }
}

export default ToolBar;
