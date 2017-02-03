import React, { PropTypes } from 'react';
import Highcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';

HighchartsMore(Highcharts.Highcharts);

import css from './Insights.css';

const Chart = ({ items, type }: Object) => {
    return (
        <div className={css.chart}>
            {(() => {
                if(type === 'polar') {
                    const categories = items.map(item => item.name);
                    const data = items.map(item => item.percentile);

                    const config = {
                        chart: {
                            polar: true
                        },
                        xAxis: {
                            categories
                        },
                        // yAxis: {
                        //     gridLineInterpolation: 'polygon',
                        // },
                        series: [
                            {
                                data,
                                pointPlacement: 'on'
                            }
                        ]
                    }
                    console.log(config);
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
    type: PropTypes.string
}

Chart.defaultProps = {
    items: []
};

export default Chart;
