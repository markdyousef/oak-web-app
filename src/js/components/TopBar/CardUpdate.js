// @flow
import React from 'react';
import { RoundButton } from '../shared/Button';
import LabelsActionBox from '../../containers/LabelsActionBoxContainer';
import { EditNav, LabelsContainer, Labels, IconButton } from './styles';
import Dropdown from '../shared/Dropdown';
import CommentsIcon from '../../icons/comments';
import LikesIcon from '../../icons/likes';

type Props = {
    isLoading?: bool,
    onSave?: () => void,
    onShowLabels?: (show: bool) => void,
    showLabels?: bool,
    readOnly?: bool,
    onEdit?: () => void,
    onSave?: () => void,
    onShowComments?: () => void
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
                text="Edit post"
                type="secondaryAction"
                onClick={onEdit}
                type="white"
            />
    } else {
        cardActions = [
            <Labels key="labels">
                <RoundButton
                    text="Add label"
                    onClick={() => onShowLabels && onShowLabels(!showLabels)}
                    type="white"
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
                text="Save post"
                onClick={onSave}
                type="secondary"
                isLoading={isLoading}
            />
        ]
    }

    return (
        <EditNav>
            <IconButton>
                <span data-title="Comment" data-title-pos="bottom">
                    <CommentsIcon onClick={props.onShowComments} />
                </span>
                {<span>0</span> }
            </IconButton>
            {<IconButton>
                <span data-title="Like" data-title-pos="bottom">
                    <LikesIcon />
                </span>
                <span>0</span>
            </IconButton> }
            {cardActions}
        </EditNav>
    );
}
