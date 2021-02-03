import React from 'react';
import './SortingStyles.css';
import Slider from './Slider';

let arrayMax = 29, arrayMin = 20;
let selectedAlgo = "QuickSort";

export default class SortingVisualizer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                array: [],
                String: "",

            };
        };

        /* When the app is opened this is called */

        componentDidMount() {
            this.resetArray();
        };

        /* Resets the chart array with a set of new values, also inserts one 100 value */

        resetArray() {
            const array = [];
            let index = randomInt(arrayMin, arrayMax)
            let count = 0;
            for(let i = 0; i < arrayMax; i++) {
                if(index === i) {
                    array.push(100);
                } else {
                    array.push(randomInt(5, 100));
                }
            }
            /* Checks to ensure at least one value is 100 */
            for(let i = 0; i < array.length; i++) {
                if(array[i] === 100) {
                    count++;
                }
            }
            if(count === 0) {
                index = randomInt(0, array.length - 1);
                array[index] = 100;
            }
            this.setState({array});
        };

        updateAlgo(newAlgo) {
            selectedAlgo = newAlgo;
            this.setState({selectedAlgo});
        }

        render() {
            const {array} = this.state;
            const numWidth =
                array.length < 30 ? 2.55 :
                    array.length < 40 ? 1.75 :
                        array.length < 50 ? 1.34 :
                            array.length < 75 ? 0.75 :
                                array.length < 100 ? 0.51:
                                    array.length < 150 ? 0.37:
                                        array.length < 176 ? 0.36 : 2;
            const width = `${numWidth}%`;
            const numMargin =
                array.length < 30 ? 4.5 :
                    array.length < 40 ? 4 :
                        array.length < 50 ? 3.5 :
                            array.length < 75 ? 3 :
                                array.length < 100 ? 2.5:
                                    array.length < 150 ? 1.5:
                                        array.length < 176 ? 1 : 2;
            const margin = `${numMargin}px`;
            const color = array.length <= 49 ? "white": "transparent";
            return (
                <>
                    <div className = "banner">
                        <label id = "title">Daniel's Sorting Algorithm Visualizer</label>
                        <button onClick = {() => this.updateAlgo("HeapSort")} id = "sort-button">Sort</button>
                        <button id = "select-button">Select Algorithm</button>
                        <label id = "selected-container">Currently Selected: <label id = "selected-algorithm">{selectedAlgo}</label></label>
                        <button onClick = {() => this.resetArray()} id = "new-array">Generate New Array</button>
                        <div className = "slider-container">
                            <label>Array Size: </label><Slider/>
                        </div>
                    </div>
                    <div className = "array-container">
                        {array.map((value, idx) => (
                            <div className = "array-bar" value = {value} key = {idx} style = {{height: `${value}%`, width: width, marginLeft: margin, marginRight: margin, color: color}}>{value}</div>
                        ))}
                    </div>
                </>
            );
        }
    }

    /* Returns a random integer */

    function randomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    export function getValue() {
        return arrayMax;
    }

    export function setNewValue(newValue) {
        if(newValue < arrayMin) {
            arrayMax = arrayMin;
        } else if(newValue > 175) {
            arrayMax = 175;
        } else {
            arrayMax = newValue;
        }
    }




