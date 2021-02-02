import React from 'react';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import './SortingStyles.css';

export default class SortingVisualizer extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                array: [],
            };

        };

        /* When the app is opened this is called */

        componentDidMount() {
            this.resetArray();
        };

        resetArray() {
            const array = [];
            for (let i = 0; i < 310; i++) {
                array.push(randomInt(5, 100));
            }
            this.setState({array});
        };

        render() {
            const {array} = this.state;

            return (
                <>
                    <div className = "banner">
                        <label id = "title">Daniel's Sorting Algorithm Visualizer</label>
                        <button id = "sort-button">Sort</button>
                        <button onClick = {() => this.resetArray()} id = "new-array">Generate New Array</button>
                        <div class = "slider">
                            <label>Array Size: </label><span id = "slider-value">100</span>
                            <Slider defaultValue = {50} marks min = {1} max = {100}/>
                        </div>
                    </div>
                    <div className = "array-container">
                        {array.map((value, idx) => (
                            <div className = "array-bar" key = {idx} style = {{height: `${value}%`}}>
                            </div>

                        ))}
                    </div>
                </>
            );
        }
    }

    function randomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }