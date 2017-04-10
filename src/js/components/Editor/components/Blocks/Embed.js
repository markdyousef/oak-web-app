import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 5px;
`;

export default class EmbedBlock extends Component {
    static propTypes = {
        data: PropTypes.shape({
            url: PropTypes.string
        }).isRequired
    }
    constructor() {
        super();
        this.state = {
            showIframe: false
        };
    }
    componentDidMount() {
        this.renderEmbedly();
    }
    componentDidUpdate(prevProps, prevState) {
        const { showIframe } = this.state;
        if (prevState.showIframe !== showIframe && showIframe === true) {
            this.renderEmbedly();
        }
    }
    getScript = () => {
        const script = document.createElement('script');
        script.async = true;
        script.src = '//cdn.embedly.com/widgets/platform.js';
        script.onload = () => {
            window.embedly();
        };
        document.body.appendChild(script);
    }
    // enablePreview = () => {}
    renderEmbedly = () => {
        if (window.embedly) {
            window.embedly();
        } else {
            this.getScript();
        }
    }
    render() {
        const { url } = this.props.data;
        const innerHTML = `
            <div>
                <a class="embedly-card" href="${url}" data-card-controls="0" data-card-theme="dark">
                    Embedded - ${url}
                </a>
            </div>
        `;
        return (
            <Container>
                <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
            </Container>
        );
    }
}
