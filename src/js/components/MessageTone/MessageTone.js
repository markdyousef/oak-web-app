// @flow
import React, { Component, PropTypes } from 'react';
import Chart from '../shared/Chart';

import css from './MessageTone.css';

class MessageTone extends Component {
    static propTypes = {
        tone: PropTypes.shape({
            document_tone: PropTypes.object
        }),
        toneOther: PropTypes.shape({
            document_tone: PropTypes.object
        })
    }
    static defaultProps = {
        tone: {},
        toneOther: {}
    }
    constructor() {
        super();
        this.renderAnalysis = this.renderAnalysis.bind(this);
        this.state = {};
    }
    renderAnalysis(name: string) {
        const { tone, toneOther } = this.props;

        if (tone && tone.document_tone) {
            const { tone_categories } = tone.document_tone;
            const categoryIndex = tone_categories.findIndex(category => category.category_id === name);

            if (categoryIndex > -1) {
                const tones = tone_categories[categoryIndex].tones;

                // chart props
                const categories = tones.map(item => item.tone_name);
                const data = [];

                // push tones to data
                data.push(tones.map(item => item.score));

                if (toneOther && toneOther.document_tone) {
                    const { document_tone } = toneOther;
                    const tonesOther = document_tone.tone_categories[categoryIndex].tones;
                    data.push(tonesOther.map(item => item.score));
                }

                return (
                    <div className={css.chart}>
                        <Chart categories={categories} data={data} type="stackedBar" title={name} />
                    </div>
                );
            }
        }
        return null;
    }
    render() {
        return (
            <div className={css.container}>
                {this.renderAnalysis('emotion_tone')}
                {this.renderAnalysis('language_tone')}
                {this.renderAnalysis('social_tone')}
            </div>
        );
    }
}

export default MessageTone;
