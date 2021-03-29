import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import { getArraySize, setArraySize } from "./SortingVisualiser";
import './SortingStyles.css';
import {withStyles} from "@material-ui/core";

let disable = true;

/* Styling for the slider and input text-box */

const useStyles = makeStyles({
  root: {
    padding: 10,
    width: 265,
  },
  thumb: {
    background: "black",
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
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
    width: 45,
  },
});

/* Function to create a slider and text-box to control the size of the array */

export default function InputSlider() {
  const classes = useStyles();
  let [value, setValue] = React.useState(getArraySize);

  /* Updates state and value in Sorting Visualizer if the user moves the slider */

  const handleSliderChange = (event, newValue) => {
    if(disable === true) {
    } else {
      setValue(newValue);
      setArraySize(newValue);
    }
  };

  /* Updates state and value in SortingVisualiser if the user enters whats in the text-box */

  const handleInputChange = (event) => {
    if(disable === true) {
    } else {
      setValue(event.target.value === '' ? '' : Number(event.target.value));
      setArraySize(value);
    }
  };

  /* Updates state and value in SortingVisualiser if the user press off the text-box */

  const handleBlur = () => {
    if(disable === true) {
    } else {
      if (value < 20) {
        setValue(20);
        setArraySize(value);
      } else if (value > 175) {
        setValue(175);
        setArraySize(value);
      } else {
        setValue(value);
        setArraySize(value);
      }
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
            min = {20}
            max = {175}
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
              min: 20,
              max: 175,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

/* Disables slider functionality */

export function setSliderDisable(bool) {
  disable = bool;
}