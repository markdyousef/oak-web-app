// @flow
import React from 'react';
import styled from 'styled-components';
import Input from '../shared/Input';
import { SquareButton } from '../shared/Button';
import colors from '../../styles/colors';
import BackIcon from '../../icons/back';
import CheckIcon from '../../icons/checkmark';

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 10px);
    flex-grow: 1;
    margin: 0px 0 0 -10px;
`;

const Label = styled.div`
    width: 30px;
    height: 33.5px;
    border-radius: 3px;
    cursor: pointer;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% * (1/5) - 10px - 1px);
    flex-grow: 1;
    margin: 10px 0 0 10px;
    & svg {
        fill: ${colors.white};
        position: relative;
        top: 1px;
    }
`;

const Section = styled.section`
    margin: 16px 0;
    & h5 {
        font-size: 12px;
        font-weight: lighter;
        color: ${colors.grey};
        font-family: 'proxima-nova'
    }
`;

const ActionSection = styled.section`
    border-top: 1px solid ${colors.lightGrey};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px 0px;
    margin-left: -20px;
    margin-right: -20px;
`;

const Back = styled.button`
    cursor: pointer;
    border: none;
    background-color: #fff;
    padding: 0;
    font-weight: normal;
    font-size: 13px;
    display: flex;
    align-items: center;
    & svg {
        margin-right: 6px;
        height: 13px;
        margin-left: -2px;
    }
`;

const Save = styled.button`
    cursor: pointer;
    border: none;
    background-color: #fff;
    padding: 0;
    font-size: 14px;
`;

const Delete = styled(Save)`
    color: #131517;
`;

type Props = {
    onCreate?: Function,
    onChange: Function,
    changePage: Function,
    labelName: ?string,
    selectedColor: string,
    labelColors: Array<string>
}

export default ({ ...props }:Props) => {
    const {
        changePage,
        labelName,
        onChange,
        labelColors,
        selectedColor,
        onCreate,
        onUpdate,
        onDelete
    } = props;
    return (
        <div>
            <Back onClick={changePage}>
                <BackIcon />
                Back
            </Back>
            <Section>
                <Input
                    title="NAME"
                    value={labelName || ''}
                    onChange={name => onChange({ name })}
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
                                style={{ backgroundColor: color }}
                                key={color}
                                onClick={() => onChange({ color })}
                            >
                                {isSelected && <CheckIcon />}
                            </Label>
                        );
                    }
                    )}
                </Grid>
            </Section>
            <ActionSection>
                {onCreate &&
                    <Save onClick={onCreate}>
                        Save label
                    </Save>
                }
                {onDelete &&
                    <Delete onClick={onDelete}>
                        Delete
                    </Delete>
                }
                {onUpdate &&
                    <Save onClick={onUpdate}>
                        Savel label
                    </Save>
                }
            </ActionSection>
        </div>
    );
};
