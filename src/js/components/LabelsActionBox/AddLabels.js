// @flow
import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Pencil from '../../icons/pencil';
import { Box as Label } from '../shared/Label';

const SectionTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 8px;
`;

const Section = styled.div`
    font-size: 15px;
`;

const LabelsSection = styled(Section)`
    padding: 8px 0 16px;
    width: calc(100% + 20px);
    overflow-y: auto;
    max-height: 300px;
    margin-left: -20px;
`;

const NoLabels = styled.div`
    font-size: 14px;
    text-align: center;
    padding: 16px 0 24px;
    font-weight: normal;
    line-height: 1.4;
    color: rgba(19, 21, 23, 0.5);
`;

const LabelContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: -20px;
    position: relative;
`;

const ActionSection = styled.section`
    border-top: 1px solid ${colors.lightGrey};
    padding-top: 16px;
    display: flex;
    justify-content: flex-end;
    margin-right: -20px;
    margin-left: -20px;
    padding-right: 20px;
    font-weight: normal;
`;

const Button = styled.button`
    background: transparent;
    padding: 0;
    border: none;
    font-size: 14px;
    margin: 15px 0 !important;
    cursor: pointer;
`;

const Edit = styled.div`
    position: absolute;
    top: 22px;
    right: 6px;
    z-index: 1;
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
            <SectionTitle>
                Add label:
            </SectionTitle>
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
                                    <Edit onClick={() => showEdit(label)}>
                                        <Pencil />
                                    </Edit>
                                </LabelContainer>
                            );
                        })}
                    </LabelsSection>
                    :
                    <NoLabels>Your team has not created any labels in this collection. Create your first label below.</NoLabels>
                }
            </Section>
            <ActionSection>
                <div onClick={changePage}>
                    Create a new label
                </div>
            </ActionSection>
        </div>
    );
};
