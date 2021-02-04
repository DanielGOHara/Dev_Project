import React from 'react';
import './SortingStyles.css';
import Slider from './Slider';
import sortedAlgorithms from'./SortingAlgorithms/sortingAlgorithms';

let arrayMax = 100, arrayMin = 20, tempMax = arrayMax;
let selectedAlgo = "QuickSort";

export default class SortingVisualizer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                array: [],
                String: "",
            };
        }

        /* When the app is opened this is called */

        componentDidMount() {
            this.resetArray();
            this.timer();
        }

        /* Resets the chart array with a set of new random values, also inserts one 100 value */

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
        }

        /* Updates the selectedAlgo variable */

        updateAlgo(newAlgo) {
            selectedAlgo = newAlgo;
            this.setState({selectedAlgo});
        }

        /* Timer interval to consistently check in the updated value from the slider */

        timer() {
            setInterval(() => this.checkMax(), 5);
        }

        /* Compares arrayMax and tempMax, if they are different arrayMax is set to tempMax and resetArray is called */

        checkMax() {
            if(arrayMax !== tempMax) {
                arrayMax = tempMax;
                this.resetArray();
            }
        }

        /* Sorts algorithm */

        sort() {
            const sortedArray = this.state.array.slice().sort((a, b) => a - b);
            const stateArray = sortedAlgorithms(selectedAlgo, this.state.array);
            console.log(arraysAreEqual(sortedArray, stateArray));
            console.log(sortedArray);
        }

        render() {
            const {array} = this.state;

            /* Sets the width depending on the arrays length */

            const numWidth =
                array.length < 30 ? 2.55 :
                    array.length < 40 ? 1.75 :
                        array.length < 50 ? 1.34 :
                            array.length < 75 ? 0.75 :
                                array.length < 100 ? 0.51:
                                    array.length < 150 ? 0.37:
                                        array.length < 176 ? 0.36 : 2;
            const width = `${numWidth}%`;

            /* Sets the margin depending on the arrays length */

            const numMargin =
                array.length < 30 ? 4.5 :
                    array.length < 40 ? 4 :
                        array.length < 50 ? 3.5 :
                            array.length < 75 ? 3 :
                                array.length < 100 ? 2.5:
                                    array.length < 150 ? 1.5:
                                        array.length < 176 ? 1 : 2;
            const margin = `${numMargin}px`;

            /* Reveals the bars value depending on the arrays length */

            const color = array.length < 30 ? "white": "transparent";
            return (
                <>
                    <div className = "header">
                        <label id = "title">Daniel's Sorting Algorithm Visualiser</label>
                        <button onClick = {() => this.sort()} id = "sort-button">Sort</button>
                        <button onClick = {() => this.updateAlgo()} id = "select-button">Select Algorithm</button>
                        <label id = "selected-container">Currently Selected: <label id = "selected-algorithm">{selectedAlgo}</label></label>
                        <button onClick = {() => this.resetArray()} id = "new-array">Generate New Array</button>
                        <div className = "slider-container">
                            <label>ArraySize: </label>
                            <Slider/>
                        </div>
                    </div>
                    <div className = "array-container">
                        {array.map((value, idx) => (
                            <div className = "array-bar" value = {value} key = {idx} style = {{height: `${value}%`, width: width, marginLeft: margin, marginRight: margin, color: color}}>{value}</div>
                        ))}
                    </div>
                    <div className = "footer">
                        <label id = "footer-title">Algorithms: </label>
                        <p id = "footer-p">
                            <button onClick = {() => this.updateAlgo("MergeSort")} id = "mergeSort">Merge Sort</button>
                            <button onClick = {() => this.updateAlgo("QuickSort")} id = "quickSort">Quick Sort</button>
                            <button onClick = {() => this.updateAlgo("HeapSort")} id = "heapSort">Heap Sort</button>
                            <button onClick = {() => this.updateAlgo("TreeSort")} id = "treeSort">Tree Sort</button>
                            <button onClick = {() => this.updateAlgo("BlockSort")} id = "blockSort">Block Sort</button>
                            <button onClick = {() => this.updateAlgo("TimSort")} id = "timSort">Tim Sort</button>
                            <button onClick = {() => this.updateAlgo("ShellSort")} id = "shellSort">Shell Sort</button>
                            <button onClick = {() => this.updateAlgo("QuadSort")} id = "quadSort">Quad Sort</button>
                            <button onClick = {() => this.updateAlgo("CubeSort")} id = "cubeSort">Cube Sort</button>
                        </p>
                    </div>
                    <label className = "project-details">Daniel O'Hara P2435725 De MontFort University Final Year Project 2021</label>
                </>
            );
        }
    }

    /* Returns a random integer */

    function randomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /* Compares the javascript sorted array to the algorithm sorted array */

    function arraysAreEqual(sortedArray, stateArray) {
        if(sortedArray.length !== stateArray.length) {
            return false;
        } else {
            for(let i = 0; i < sortedArray.length; i++) {
                if(sortedArray[i] !== stateArray[i]) {
                    return false;
                }
            }
        }
        return true;
    }

    /* Returns the arrayMax variable */

    export function getValue() {
        return arrayMax;
    }

    /* Checks incoming variable is within the array size limits and applies it */

    export function setNewValue(newValue) {
        if(newValue < arrayMin) {
             tempMax = arrayMin;
        } else if(newValue > 175) {
            tempMax = 175;
        } else {
            tempMax = newValue;
        }
    }





