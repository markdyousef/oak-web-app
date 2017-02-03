import React, { PropTypes } from 'react';
import { PolarChart } from 'react-chartjs';

import css from './Insights.css';

const Chart = ({ items, type }: Object) => {
    return (
        <div className={css.chart}>
            {(() => {
                if(type === 'polar') {
                    return null;
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
