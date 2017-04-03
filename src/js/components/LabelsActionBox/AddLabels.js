import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Section = styled.section`
    margin: 20px 0;
`;

const LabelsSection = styled(Section)`
    height: 150px;
    width: 100%;
    overflow-y: auto;
`;

const ActionSection = styled.section`
    border-top: 1px solid ${colors.lightGrey};
    height: 50px;
`;

const AddButton = styled.button`
    background: transparent;
    padding: 0;
    border: none;
    font-size: 14px;
    margin: 15px 0 !important;
    cursor: pointer;
    font-weight: bold;
`;

const Label = styled.div`
    width: 100%;
    height: 30px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1px;
    font-size: 14px;
    color: #fff;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 5px;
    cursor: pointer;
`;

class AddLabels extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        collectionLabels: PropTypes.arrayOf(PropTypes.object),
        cardLabels: PropTypes.arrayOf(PropTypes.string),
        onSelect: PropTypes.func.isRequired
    }
    constructor() {
        super();
        this.state = {};
    }
    renderLabels = () => {
        const { collectionLabels, cardLabels, onSelect } = this.props;
        return (
            <LabelsSection>
                {collectionLabels.map((label) => {
                    const isActive = cardLabels.findIndex(id => id === label.id) > -1;
                    return (
                        <Label
                            key={label.index + label.name}
                            onClick={() => onSelect(label.id)}
                            style={{ backgroundColor: label.color }}
                        >
                            {label.name}
                            {isActive && <div>/</div>}
                        </Label>
                    );
                })}
            </LabelsSection>
        );
    }
    render() {
        const { onChange } = this.props;
        return (
            <div>
                <Section>
                    Add label:
                </Section>
                <Section>
                    {this.renderLabels()}
                </Section>
                <ActionSection>
                    <AddButton onClick={onChange}>
                        Create a new label
                    </AddButton>
                </ActionSection>
            </div>
        );
    }
}

export default AddLabels;
