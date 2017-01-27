import React, { Component, PropTypes } from 'react';

import css from './Graph.css';

class Graph extends Component {
    static propTypes = {
        data: PropTypes.shape({
            x: PropTypes.arrayOf(PropTypes.string).isRequired,
            y: PropTypes.arrayOf(PropTypes.object).isRequired
        })
    }
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className={css.container}>
                {(() => {
                    if (type === 'line') {
                        return (
                            <LineChart
                                data={graphFormat}
                                width="500"
                                height="500"
                            />
                        );
                    }
                    return null;
                })()}
            </div>
        );
    }
}

export default Graph;
