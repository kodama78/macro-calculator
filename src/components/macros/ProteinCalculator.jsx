import React, {Component} from 'react';
import { MetricsContext, MetricsConsumer } from '../context/MetricsContext';

export default class ProteinsCalculator extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log('Metrics: ', this.context)
        const {
            targetWeight,
            proteinAmount,
            calculateMacroCalories
        } = this.context
        calculateMacroCalories(targetWeight, proteinAmount, 4);
    }

    render() {
        return(
            <MetricsConsumer>
                {(context) => (
                    <div>
                        <button onClick={() => context.calculateMacroCalories(context.targetWeight, context.proteinAmount, 4)}>
                            Calculate Protein Calories:
                        </button>
                        <div>
                            <div>Protein Calories</div>
                            <div>{context.proteinCalories}</div>
                        </div>
                    </div>
                    
                )}

            </MetricsConsumer>
        )
    }
}

ProteinsCalculator.contextType = MetricsContext;
