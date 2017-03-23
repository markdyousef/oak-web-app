import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Input from '../shared/Input';
import Button from '../shared/Button';
import colors from '../../styles/colors';

const COLORS = [
    '#C1BD9D',
    '#FEC288',
    '#FFA489',
    '#E87385',
    '#EAABC8',
    '#B5D3C9',
    '#708680',
    '#67B1B4',
    '#6A76A7',
    '#6E4B6E'
];

const H5 = styled.h5`
    font-size: 14px;
    font-weight: lighter;
    color: ${colors.grey};
    font-family: 'proxima-nova'
`;

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 200px;
`;

const Label = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 3px;
    cursor: pointer;
    margin: 5px;
`;

const Section = styled.section`
    margin: 20px 0;
`;

const ActionSection = styled.section`
    border-top: 1px solid ${colors.lightGrey};
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: flex-end;
`;

const Back = styled.button`
    cursor: pointer;
    border: none;
    background-color: #fff;
    padding: 0;
`;


class CreateLabels extends Component {
    static propTypes = {
        onCreate: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired
    }
    constructor() {
        super();
        this.renderColorGrid = this.renderColorGrid.bind(this);
        this.state = {
            name: '',
            selectedColor: COLORS[0]
        };
    }
    renderColorGrid() {
        const { selectedColor } = this.state;
        return (
            <Grid>
                {COLORS.map((color) => {
                    const isSelected = (selectedColor === color);
                    return (
                        <Label
                            style={{
                                backgroundColor: color,
                                border: (isSelected) ? `1px solid ${colors.grey}` : null
                            }}
                            key={color}
                            onClick={() => this.setState({ selectedColor: color })}
                        />
                    );
                }
                )}
            </Grid>
        );
    }
    render() {
        const { name } = this.state;
        const { onCreate, onChange } = this.props;
        return (
            <div>
                <Back onClick={onChange}>
                    Back
                </Back>
                <Section>
                    <Input
                        title="NAME"
                        value={name}
                        onChange={value => this.setState({ name: value })}
                        placeholder="Label name"
                    />
                </Section>
                <Section>
                    <H5>SELECT COLOR: </H5>
                    {this.renderColorGrid()}
                </Section>
                <ActionSection>
                    <Button
                        onClick={() => onCreate()}
                        text="CREATE"
                        type="primary"
                    />
                </ActionSection>
            </div>
        );
    }
}

export default CreateLabels;
