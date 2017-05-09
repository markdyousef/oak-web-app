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
    width: 200px;
`;

const Label = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 3px;
    cursor: pointer;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
        fill: ${colors.white}
    }
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
    justify-content: space-between;
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

const Save = styled.button`
    cursor: pointer;
    border: none;
    background-color: #fff;
    padding: 0;
    font-size: 14px;
`;

const Delete = styled(Save)`
    color: ${colors.red};
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
                        Save
                    </Save>
                }
                {onUpdate &&
                    <Save onClick={onUpdate}>
                        Update
                    </Save>
                }
                {onDelete &&
                    <Delete onClick={onDelete}>
                        Delete
                    </Delete>
                }
            </ActionSection>
        </div>
    );
};
