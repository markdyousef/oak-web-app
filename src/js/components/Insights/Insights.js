import React, { PropTypes, Component } from 'react';
import Chart from './Chart';

import css from './Insights.css';

class Insights extends Component {
    static propTypes = {
        insights: PropTypes.shape({
            values: PropTypes.array
        })
    }
    static defaultProps = {
        insights: {}
    }
    constructor() {
        super();
        this.renderInsight = this.renderInsight.bind(this);
        this.state = {}
    }
    renderInsight(name: string) {
        const { insights } = this.props;

        if (insights[name]) {
            const items = insights[name];
            return (
                <div className={css.insight}>
                    <h1>{name.toUpperCase()}</h1>
                    <Chart items={items} type="polar" />
                </div>
            );
        }
        return null;
    }
    render() {
        return (
            <div className={css.container}>
                {this.renderInsight('values')}
                {this.renderInsight('personality')}
                {this.renderInsight('needs')}
            </div>
        );
    }
}

export default Insights;
