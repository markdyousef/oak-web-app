// @flow
import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import LabelsActionBox from '../../containers/LabelsActionBoxContainer';
import Button from '../shared/Button';

const Container = styled.nav`
    display: flex;
    background: ${colors.white};
    border-bottom: 1px solid ${colors.lightGrey};
    height: 60px;
    align-items: center;
    justify-content: flex-end;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    padding-right: 30px;
    & button {
        margin: 0 2px;
    }
`;

const EditNav = styled.div`
    display: flex;
`;

class TopBar extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired,
        save: PropTypes.func.isRequired,
        showEdit: PropTypes.bool.isRequired,
        edit: PropTypes.func.isRequired,
        showComments: PropTypes.func.isRequired,
        collectionId: PropTypes.string.isRequired,
        cardId: PropTypes.string
    };
    static defaultProps = {
        cardId: null
    }
    constructor() {
        super();
        this.state = {
            showLabels: false
        };
    }
    renderButtons = () => {
        const { save, showEdit, edit, cardId, collectionId } = this.props;
        const { showLabels } = this.state;

        if (showEdit) {
            return (
                <EditNav>
                    <div>
                        <Button
                            text="Add label"
                            onClick={() => this.setState({ showLabels: !showLabels })}
                        />
                        {showLabels &&
                            <LabelsActionBox
                                close={() => this.setState({ showLabels: false })}
                                cardId={cardId}
                                collectionId={collectionId}
                            />
                        }
                    </div>
                    <Button
                        text="Save card"
                        onClick={save}
                        type="primary"
                    />
                </EditNav>
            );
        }
        return <Button text="Edit card" type="secondaryAction" onClick={edit} />;
    }
    render() {
        const { close, showComments } = this.props;
        return (
            <Container>
                <Right>
                    {this.renderButtons()}
                    <Button
                        onClick={showComments}
                        text="Comments"
                        rounded
                    />
                    <Button
                        onClick={close}
                        text="X"
                        rounded
                    />
                </Right>

            </Container>
        );
    }
}


export default TopBar;
