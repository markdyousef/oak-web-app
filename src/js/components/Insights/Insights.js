import React, { PropTypes, Component } from 'react';

import css from './Insights.css';

class Insights extends Component {
    static propTypes = {
        insights: PropTypes.shape({
            value: PropTypes.array
        })
    }
    static defaultProps = {
        insights: {}
    }
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div className={css.container}>

            </div>
        );
    }
}

export default Insights;
