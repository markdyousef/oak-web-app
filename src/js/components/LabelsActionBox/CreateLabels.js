import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';

const COLORS = [
    '#0aa5ea',
    '#f9b74b',
    '#ea8465',
    '#58c674',
    '#b2668c'
];

import css from './LabelsActionBox.css';

class CreateLabels extends Component {
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
            <div className={css.colorChooser}>
                {COLORS.map((color, index) => (
                    <div
                        key={index}
                        style={{
                            border: (color === selectedColor) ? '2px solid #303b42' : null,
                            backgroundColor: color
                        }}
                        className={css.color}
                        onClick={() => { this.setState({ selectedColor: color }); }}
                    />
                ))}
            </div>
        );
    }
    render() {
        const { name } = this.state;
        return (
            <div className={css.createContainer}>
                <header>
                    <h3>CREATE LABEL</h3>
                </header>
                <div className={css.name}>
                    <Input
                        title="NAME"
                        value={name}
                        onChange={value => this.setState({ name: value })}
                    />
                </div>
                <div className={css.selectColor}>
                    <h5>SELECT COLOR: </h5>
                    {this.renderColorGrid()}
                </div>
            </div>
        );
    }
}

export default CreateLabels;
