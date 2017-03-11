// @flow
import React, { PropTypes } from 'react';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';

import css from './Admin.css';

const CreateTeam = ({ teamName, onChange, onSubmit }:Object) => {
    return (
        <div className={css.actionField}>
            <h1>Create a new team</h1>
            <div>
                <Input
                    value={teamName}
                    placeholder="Clai"
                    onChange={onChange}
                />
                <Button
                    onClick={onSubmit}
                    text="Create"
                    type="primary"
                />
            </div>
        </div>
    );
};

CreateTeam.propTypes = {
    teamName: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

CreateTeam.defaultProps = {
    teamName: null
};


export default CreateTeam;
