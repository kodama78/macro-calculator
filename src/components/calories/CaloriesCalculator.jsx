import React, { Component } from 'react';
import { MetricsConsumer } from '../context/MetricsContext';
export default class CaloriesCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalCalories: 0
        }
        this.calculateTotalCalories = this.calculateTotalCalories.bind(this);
    }

    calculateTotalCalories(targetBodyWeight, occupationHours, workoutHours) {
        const tbw = parseInt(targetBodyWeight);
        const o = parseInt(occupationHours);
        const w = parseInt(workoutHours);
        const calories = tbw * (o + w);
        this.setState({totalCalories: calories})
    }

    render() {
    
        return (
            <MetricsConsumer>
                {(context) => (
                    <div>
                        {console.log('METRICS: ', context)}
                        <button onClick={(context) => this.calculateTotalCalories(context.targetWeight, context.occupation, context.workoutHours)}>
                            Calculate
                        </button>
                        <div>Total Calories Allowed</div>
                        <div>{this.state.totalCalories}</div>
                    </div>

                )}

            </MetricsConsumer>
        );
    }
}
