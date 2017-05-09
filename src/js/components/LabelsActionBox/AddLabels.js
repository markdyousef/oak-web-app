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

const LabelContainer = styled.div`
    width: 100%;
    display: flex;
    & span {
        max-width: 100px;
    }
`;

const ActionSection = styled.section`
    border-top: 1px solid ${colors.lightGrey};
    height: 50px;
`;

const Button = styled.button`
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

export default ({ cardLabels, collectionLabels, changePage, onSelect, showEdit }: Props) => {
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
                                <LabelContainer
                                    key={label.id + label.name}
                                >
                                    <Label
                                        onClick={() => onSelect(label.id)}
                                        style={{ backgroundColor: label.color }}
                                        name={label.name}
                                        isActive={isActive}
                                    />
                                    <Button onClick={() => showEdit(label)}>
                                        Edit
                                    </Button>
                                </LabelContainer>
                            );
                        })}
                    </LabelsSection>
                    :
                    <LabelsSection>No labels...</LabelsSection>
                }
            </Section>
            <ActionSection>
                <Button onClick={changePage}>
                    Create a new label
                </Button>
            </ActionSection>
        </div>
    );
};
