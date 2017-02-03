import React, { PropTypes } from 'react';
import Highcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';

HighchartsMore(Highcharts.Highcharts);

import css from './Insights.css';

const Chart = ({ items, type, title }: Object) => {
    return (
        <div className={css.chart}>
            {(() => {
                if(type === 'polar') {
                    const categories = items.map(item => item.name);
                    const data = items.map(item => item.percentile * 100);

                    const config = {
                        chart: {
                            polar: true
                        },
                        title: {
                            text: title.toUpperCase()
                        },
                        xAxis: {
                            categories,
                            tickmarkPlacement: 'on'
                        },
                        series: [
                            {
                                name: '',
                                data,
                                pointPlacement: 'on'
                            }
                        ]
                    }
                    return <Highcharts config={config} className={css.polarChart}/>
                }
                return null;
            })()}
        </div>
    );
}

Chart.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        percentile: PropTypes.number.isRequired,
        children: PropTypes.arrayOf(PropTypes.object)
    })),
    type: PropTypes.string,
    name: PropTypes.string
}

Chart.defaultProps = {
    items: []
};

export default Chart;
