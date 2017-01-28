import React, { Component, PropTypes } from 'react';

import css from './Graph.css';

class Graph extends Component {
    static propTypes = {
        data: PropTypes.shape({
            x: PropTypes.arrayOf(PropTypes.string).isRequired,
            y: PropTypes.arrayOf(PropTypes.object).isRequired
        }),
        type: PropTypes.string.isRequired
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { type } = this.props;
        return (
            <div className={css.container}>
                {(() => {
                    if (type === 'line') {
                        return null;
                    }
                    return null;
                })()}
            </div>
        );
    }
}

export default Graph;
