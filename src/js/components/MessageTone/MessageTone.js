// @flow
import React, { Component, PropTypes } from 'react';

import css from './MessageTone.css';

class MessageTone extends Component {
    static propTypes = {
        tone: PropTypes.shape({
            document_tone: PropTypes.object.isRequired
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
            const { tone_categories } = document_tone;
            const categoryIndex = tone_categories.findIndex(category => category.category_id === name);
            if (categoryIndex > -1) {
                const tones = tone_categories[categoryIndex].tones;
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
