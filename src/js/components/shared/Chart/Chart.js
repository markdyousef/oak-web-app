// @flow
import React, { PropTypes } from 'react';
import Highcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';

import css from './Chart.css';

HighchartsMore(Highcharts.Highcharts);


const Chart = ({ items, type, title }: Object) => {
    return (
        <div className={css.chart}>
            {(() => {
                if (type === 'polar') {
                    const categories = items.map(item => item.name);
                    const data = items.map(item => Math.floor(item.percentile * 100));

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
                        legend: {
                            enabled: false
                        },
                        credits: {
                            enabled: false
                        },
                        series: [
                            {
                                data,
                                pointPlacement: 'on'
                            }
                        ]
                    };
                    return <Highcharts config={config} className={css.polarChart}/>
                };
                return null;
            })()}
        </div>
    );
};

Chart.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        percentile: PropTypes.number.isRequired,
        children: PropTypes.arrayOf(PropTypes.object)
    })),
    type: PropTypes.string,
    title: PropTypes.string
};

Chart.defaultProps = {
    items: [],
    type: null,
    title: null
};

export default Chart;
