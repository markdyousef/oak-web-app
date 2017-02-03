// @flow
import React, { PropTypes, Component } from 'react';
import Chart from '../shared/Chart';

import css from './Insights.css';

class Insights extends Component {
    static propTypes = {
        insights: PropTypes.shape({
            values: PropTypes.array
        }),
        insightsOther: PropTypes.shape({
            values: PropTypes.array
        })
    }
    static defaultProps = {
        insights: {},
        insightsOther: {}
    }
    constructor() {
        super();
        this.renderInsight = this.renderInsight.bind(this);
        this.state = {}
    }
    renderInsight(name: string) {
        const { insights, insightsOther } = this.props;

        if (insights[name]) {
            const data = [];
            const items = insights[name];
            const categories = items.map(item => item.name);

            const insight = items.map(item => Math.floor(item.percentile * 100));
            data.push(insight);

            if (insightsOther[name]) {
                const itemsOther = insightsOther[name];
                const insightOther = itemsOther.map(item => Math.floor(item.percentile * 100));
                data.push(insightOther);
            }
            return (
                <div className={css.insight}>
                    <Chart
                        categories={categories}
                        data={data}
                        type="polar"
                        title={name}
                    />
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
