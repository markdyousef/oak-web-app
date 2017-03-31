import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import LabelsActionBox from '../LabelsActionBox';
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
`;

const EditNav = styled.div`
    display: flex;
`;

import css from './CardDetail.css';

class TopBar extends Component {
    static propTypes = {
        close: PropTypes.func.isRequired,
        save: PropTypes.func.isRequired,
        showEdit: PropTypes.bool.isRequired,
        edit: PropTypes.func.isRequired
    };
    constructor() {
        super();
        this.renderButtons = this.renderButtons.bind(this);
        this.state = {
            showLabels: false
        };
    }
    renderButtons() {
        const { save, showEdit, edit } = this.props;
        const { showLabels } = this.state;

        if (showEdit) {
            return (
                <EditNav>
                    <div>
                        <Button
                            text="Add label"
                            onClick={() => this.setState({ showLabels: !showLabels })}
                            type="secondaryAction"
                        />
                        {showLabels &&
                            <LabelsActionBox
                                close={() => this.setState({ showLabels: false })}
                            />
                        }
                    </div>
                    <Button
                        text="Save card"
                        onClick={save}
                        type="primaryAction"
                    />
                </EditNav>
            );
        }
        return <Button text="Edit card" type="secondaryAction" onClick={edit} />;
    }
    render() {
        const { close } = this.props;
        return (
            <Container>
                <Right>
                    {this.renderButtons()}
                    <Button
                        className={css.close}
                        onClick={() => close()}
                        text="X"
                        type="transparent"
                    />
                </Right>

            </Container>
        );
    }
}


export default TopBar;
