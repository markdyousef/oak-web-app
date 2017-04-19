// @flow
import React from 'react';
import styled from 'styled-components';
import Input from '../shared/Input';
import Button from '../shared/Button';
import colors from '../../styles/colors';
import BackIcon from '../../icons/back';

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
    & h5 {
        font-size: 14px;
        font-weight: lighter;
        color: ${colors.grey};
        font-family: 'proxima-nova'
    }
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
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    & svg {
        margin-right: 5px;
    }
`;

type Props = {
    onCreate: Function,
    onChange: Function,
    changePage: Function,
    labelName: string,
    selectedColor: string,
    labelColors: Array<string>
}

export default ({ onCreate, onChange, changePage, labelName, selectedColor, labelColors }:Props) => {
    return (
        <div>
            <Back onClick={changePage}>
                <BackIcon />
                Back
            </Back>
            <Section>
                <Input
                    title="NAME"
                    value={labelName}
                    onChange={value => onChange('labelName', value)}
                    placeholder="Label name"
                />
            </Section>
            <Section>
                <h5>SELECT COLOR: </h5>
                <Grid>
                    {labelColors.map((color) => {
                        const isSelected = (selectedColor === color);
                        return (
                            <Label
                                style={{
                                    backgroundColor: color,
                                    border: (isSelected) ? `1px solid ${colors.grey}` : null
                                }}
                                key={color}
                                onClick={() => onChange('selectedColor', color)}
                            />
                        );
                    }
                    )}
                </Grid>
            </Section>
            <ActionSection>
                <Button
                    onClick={() => onCreate(labelName, selectedColor)}
                    text="CREATE"
                    type="primary"
                />
            </ActionSection>
        </div>
    );
};
