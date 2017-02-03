import React, { PropTypes } from 'react';

import css from './Insights.css';

const Chart = ({ items, type }: Object) => {
    return (
        <div className={css.chart}>
            {(() => {
                if(type === 'polar') {
                    const labels = items.map(item => item.name);
                    const dataset = items.map(item => item.percentile);

                    const data = {
                        labels,
                        datasets: [dataset]
                    }

                    // return <PolarChart data={data} options={null} />
                    return null
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
