// @flow
import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { Box as Label } from '../shared/Label';

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

type Props = {
    cardLabels: ?Array<string>,
    collectionLabels: ?Array<Object>,
    changePage: Function,
    onSelect: Function
}

export default ({ cardLabels, collectionLabels, changePage, onSelect }: Props) => {
    return (
        <div>
            <Section>
                Add label:
            </Section>
            <Section>
                {(collectionLabels && collectionLabels.length > 0) ?
                    <LabelsSection>
                        {collectionLabels.map((label) => {
                            const isActive =
                                cardLabels &&
                                cardLabels.findIndex(id => id === label.id) > -1;
                            return (
                                <Label
                                    key={label.id + label.name}
                                    onClick={() => onSelect(label.id)}
                                    style={{ backgroundColor: label.color }}
                                    name={label.name}
                                    isActive={isActive}
                                />
                            );
                        })}
                    </LabelsSection>
                    :
                    <LabelsSection>No labels...</LabelsSection>
                }
            </Section>
            <ActionSection>
                <AddButton onClick={changePage}>
                    Create a new label
                </AddButton>
            </ActionSection>
        </div>
    );
};
