import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import { getSpeed, setSpeed } from './SortingVisualizer';
import './SortingStyles.css';

/* Styling for the slider and input text-box */

const useStyles = makeStyles({
    root: {
        padding: 10,
        width: 155,
    },
    thumb: {
        background: "black",
    },
    rail: {
        background: "black",
    },
    track: {
        background: "black",
    },
    input: {
        fontFamily: 'fantasy',
        fontSize: 'large',
        width: 50,
    },
});

/* Function to create a slider and text-box to control the speed of sorting */

export default function InputSpeed() {
    const classes = useStyles();
    let [value, setValue] = React.useState(getSpeed);

    /* Updates state and value in Sorting Visualizer if the user moves the slider */

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        setSpeed(newValue);
    };

    /* Updates state and value in SortingVisualizer if the user enters whats in the text-box */

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
        setSpeed(value);
    };

    /* Updates state and value in SortingVisualizer if the user press off the text-box */

    const handleBlur = () => {
        if(value < 1) {
            setValue(1);
            setSpeed(value);
        } else if(value > 15) {
            setValue(15);
            setSpeed(value);
        } else {
            setValue(value);
            setSpeed(value);
        }
    };

    return (
        <div className = {classes.root}>
            <Grid container spacing = {2} alignItems = "center">
                <Grid item xs>
                    <Slider
                        classes = {{
                            thumb: classes.thumb,
                            rail: classes.rail,
                            track: classes.track,
                        }}
                        value = {typeof value === 'number' ? value : 0}
                        onChange = {handleSliderChange}
                        aria-labelledby = "input-slider"
                        min = {1}
                        max = {15}
                    />
                </Grid>
                <Grid item>
                    <Input
                        className = {classes.input}
                        value = {value}
                        margin = "dense"
                        onChange = {handleInputChange}
                        onBlur = {handleBlur}
                        disableUnderline = {true}
                        inputProps = {{
                            step: 1,
                            min: 1,
                            max: 15,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}