import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Section = styled.section`
    margin: 20px 0;
`;

class AddLabels extends Component {
    constructor() {
        super();
        this.renderLabels = this.renderLabels.bind(this);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Section>
                    Add label:
                </Section>
                <Section>

                </Section>
            </div>
        );
    }
}

export default AddLabels;
