// @flow
import React, { PropTypes, Component } from 'react';
import Chart from '../shared/Chart';

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

            const categories = items.map(item => item.name);
            const data = items.map(item => Math.floor(item.percentile * 100));
            return (
                <div className={css.insight}>
                    <Chart categories={categories} data={data} type="polar" title={name} />
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
