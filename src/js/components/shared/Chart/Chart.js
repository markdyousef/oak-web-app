// @flow
import React, { PropTypes } from 'react';
import Highcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';

import css from './Chart.css';

HighchartsMore(Highcharts.Highcharts);


const Chart = ({ categories, data, title, type }: Object) => {
    return (
        <div className={css.container}>
            {(() => {
                if (type === 'polar') {
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
                    return <Highcharts config={config} className={css.polarChart} />;
                }
                if (type === 'stackedBar') {
                    const config = {
                        chart: {
                            type: 'bar'
                        },
                        title: {
                            text: title.toUpperCase()
                        },
                        xAxis: {
                            categories
                        },
                        legend: {
                            enabled: false
                        },
                        credits: {
                            enabled: false
                        },
                        series: [
                            {
                                data
                            }
                        ]
                    };
                    return <Highcharts config={config} />;
                }
                return null;
            })()}
        </div>
    );
};

Chart.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(PropTypes.number),
    type: PropTypes.string,
    title: PropTypes.string
};

Chart.defaultProps = {
    categories: [],
    data: [],
    type: null,
    title: null
};

export default Chart;
