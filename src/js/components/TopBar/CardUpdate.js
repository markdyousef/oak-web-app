// @flow
import React from 'react';
import { RoundButton } from '../shared/Button';
import LabelsActionBox from '../../containers/LabelsActionBoxContainer';
import { EditNav } from './styles';

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
            <div key="labels">
                <RoundButton
                    text="Add label"
                    onClick={() => onShowLabels && onShowLabels(!showLabels)}
                />
                    {showLabels &&
                        <LabelsActionBox />
                    }
            </div>,
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
