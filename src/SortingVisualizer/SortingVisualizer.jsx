import React from 'react';
import './SortingStyles.css';
import Slider from './Slider';

let value = 300;
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
            let index = randomInt(20, value)
            let count = 0;
            for(let i = 0; i < value; i++) {
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

            return (
                <>
                    <div className = "banner">
                        <label id = "title">Daniel's Sorting Algorithm Visualizer</label>
                        <button onClick = {() => this.updateAlgo("HeapSort")} id = "sort-button">Sort</button>
                        <button id = "select-button">Select Algorithm</button>
                        <label id = "selected-container">Currently Selected: <label id = "selected-algorithm">{selectedAlgo}</label></label>
                        <button onClick = {() => this.resetArray()} id = "new-array">Generate New Array</button>
                        <div className = "slider-container">
                            <label>Array Size: </label><span id = "slider-value"/>
                            <p><Slider>{Slider}</Slider></p>
                        </div>
                    </div>
                    <div className = "array-container">
                        {array.map((value, idx) => (
                            <div className = "array-bar" key = {idx} style = {{height: `${value}%`}}/>
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
        return value;
    }

    export function setNewValue(newValue) {
        value = newValue;
    }




