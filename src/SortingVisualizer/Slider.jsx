import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import {setNewValue} from './SortingVisualizer';
import './SortingStyles.css';

const useStyles = makeStyles({
    root: {
        width: 270,
    },
    input: {
        width: 42,
    },
});

export default function InputSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(50);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        setNewValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
        setNewValue(event.target.value);
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <div className = {classes.root}>
            <Grid container spacing = {2} alignItems = "center">
                <Grid item xs>
                    <Slider
                        value = {typeof value === 'number' ? value : 0}
                        onChange = {handleSliderChange}
                        aria-labelledby = "input-slider"
                        min = {1}
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
                            min: 1,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}