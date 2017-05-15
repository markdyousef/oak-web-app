// @flow
import React from 'react';
import { RoundButton } from '../shared/Button';
import LabelsActionBox from '../../containers/LabelsActionBoxContainer';
import { EditNav, LabelsContainer, Labels } from './styles';
import Dropdown from '../shared/Dropdown';

type Props = {
    isLoading?: bool,
    onSave?: () => void,
    onShowLabels?: (show: bool) => void,
    showLabels?: bool,
    readOnly?: bool,
    onEdit?: () => void,
    onSave?: () => void
}

export default ({ ...props }: Props) => {
    const {
        showLabels,
        onShowLabels,
        onSave,
        isLoading,
        readOnly,
        onEdit
    } = props;

    let cardActions;
    if (readOnly) {
        cardActions =
            <RoundButton
                text="Edit Card"
                type="secondaryAction"
                onClick={onEdit}
            />
    } else {
        cardActions = [
            <Labels key="labels">
                <RoundButton
                    text="Add label"
                    onClick={() => onShowLabels && onShowLabels(!showLabels)}
                />
                    {showLabels &&
                        <LabelsContainer>
                            <Dropdown onClose={() => onShowLabels && onShowLabels(false)}>
                                <LabelsActionBox />
                            </Dropdown>
                        </LabelsContainer>
                    }
            </Labels>,
            <RoundButton
                key="save"
                text="Save Card"
                onClick={onSave}
                type="secondary"
                isLoading={isLoading}
            />
        ]
    }

    return (
        <EditNav>
            {cardActions}
        </EditNav>
    );
}
