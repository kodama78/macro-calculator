import React, { Component } from 'react';
import { MetricsConsumer } from '../context/MetricsContext';
export default class CaloriesCalculator extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
    
        return (
            <MetricsConsumer>
                {(context) => (
                    <div>
                        <button onClick={() => context.calculateTotalCalories(context.targetWeight, context.occupation, context.workoutHours)}>
                            Calculate
                        </button>
                        <div>Total Calories Allowed</div>
                        <div>{context.totalCalories}</div>
                    </div>
                )}
            </MetricsConsumer>
        );
    }
}
