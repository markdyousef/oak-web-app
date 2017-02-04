// @flow
import React, { Component, PropTypes } from 'react';
import Chart from '../shared/Chart';

import css from './MessageTone.css';

class MessageTone extends Component {
    static propTypes = {
        tone: PropTypes.shape({
            document_tone: PropTypes.object
        })
    }
    static defaultProps = {
        tone: {}
    }
    constructor() {
        super();
        this.renderAnalysis = this.renderAnalysis.bind(this);
        this.state = {};
    }
    renderAnalysis(name: string) {
        const { tone } = this.props;

        if (tone && tone.document_tone) {
            const { tone_categories } = tone.document_tone;
            const categoryIndex = tone_categories.findIndex(category => category.category_id === name);
            if (categoryIndex > -1) {
                const tones = tone_categories[categoryIndex].tones;

                const categories = tones.map(item => item.tone_name);
                const data = tones.map(item => item.score);

                return (
                    <div className={css.chart}>
                        <Chart categories={categories} data={[data]} type="stackedBar" title={name} />
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
