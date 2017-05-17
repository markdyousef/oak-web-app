// @flow
import React from 'react';
import { RoundButton } from '../shared/Button';
import LabelsActionBox from '../../containers/LabelsActionBoxContainer';
import Menu from '../shared/Dropdown';
import CreateCard from '../CreateCard';
import { EditNav, Dropdown, NavContainer } from './styles';

type Props = {
    isLoading?: bool,
    onCreate?: () => void,
    showMenu?: bool,
    closeMenu?: () => void,
    collectionId?: string,
    collections?: Array<Object>,
    saveCard?: () => void,
    updateCollection?: () => void,
    showLabels?: bool,
    onShowLabels?: () => void
}

export default ({ ...props }: Props) => {
    return (
        <EditNav>
            <NavContainer>
                <RoundButton
                    text="Share post"
                    onClick={props.onCreate}
                    type="disabled"
                    isLoading={props.isLoading}
                />
                {props.showMenu &&
                    <Dropdown style={{ right: '10px' }}>
                        <Menu onClose={props.closeMenu}>
                            <CreateCard
                                collectionId={props.collectionId}
                                collections={props.collections}
                                addCard={props.saveCard}
                                updateCollection={props.updateCollection}
                                showLabels={props.showLabels}
                                onShowLabels={props.onShowLabels}
                            />
                        </Menu>
                    </Dropdown>
                }
            </NavContainer>
        </EditNav>
    );
}
