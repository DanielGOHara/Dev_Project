import React from 'react';
import './SortingStyles.css';

    export default class SortingVisualizer extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                array: [],
            };
        }

        /* When the app is opened this is called */

        componentDidMount() {
            this.resetArray();
        }

        resetArray() {
            const array = [];
            for (let i = 0; i < 310; i++) {
                array.push(randomInt(5, 100));
            }
            this.setState({array});
        }

        render() {
            const {array} = this.state;

            return (
                <>
                    <div className = "banner">
                        <div className = "banner-container">

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