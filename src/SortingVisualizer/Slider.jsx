import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import {getValue} from "./SortingVisualizer";
import {setNewValue} from './SortingVisualizer';
import './SortingStyles.css';

const useStyles = makeStyles({
    root: {
        width: 265,
    },
    slider: {
        selectionColor: 'black',
    },
    input: {
        width: 50,
    },
});

export default function InputSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(getValue);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        setNewValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
        setNewValue(value);
    };

    const handleBlur = () => {
        setNewValue(value);
    };

    return (
        <div className = {classes.root}>
            <Grid container spacing = {2} alignItems = "center">
                <Grid item xs>
                    <Slider
                        className = {classes.slider}
                        value = {typeof value === 'number' ? value : 0}
                        onChange = {handleSliderChange}
                        aria-labelledby = "input-slider"
                        min = {20}
                        max = {300}
                    />
                </Grid>
                <Grid item>
                    <Input
                        className = {classes.input}
                        value = {value}
                        margin = "dense"
                        onChange = {handleInputChange}
                        onBlur = {handleBlur}
                        inputProps = {{
                            step: 1,
                            min: 20,
                            max: 300,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}