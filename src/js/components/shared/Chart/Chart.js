// @flow
import React, { PropTypes } from 'react';

import css from './Chart.css';

const Chart = ({ categories, data, title, type }: Object) => {
    return (
        <div className={css.container}>
            {(() => {
                if (type === 'polar') {
                    const series = data.map(items => (
                        {
                            data: items,
                            pointPlacement: 'on'
                        }
                    ))
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
                        series
                    };
                    return null;
                }
                if (type === 'stackedBar') {
                    const series = data.map(items => (
                        {
                            data: items
                        }
                    ))
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
                        series
                    };
                    return null;
                }
                return null;
            })()}
        </div>
    );
};

Chart.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(PropTypes.array),
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
