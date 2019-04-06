import React, {Component} from 'react';
import { MetricsContext, MetricsConsumer } from '../context/MetricsContext';

export default class FatCalculator extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidUpdate() {
    //     console.log('Metrics: ', this.context)
    //     const {
    //         targetWeight,
    //         proteinAmount,
    //         calculateMacroCalories
    //     } = this.context
    //     calculateMacroCalories(targetWeight, proteinAmount, 9);
    // }

    render() {
        return(
            <MetricsConsumer>
                {(context) => (
                    <div>
                        <button onClick={() => context.calculateMacroCalories('fatCalories', context.targetWeight, context.fatAmount, 9)}>
                            Calculate Fat Calories:
                        </button>
                        <div>
                            <div>Fat Calories</div>
                            <div>{context.fatCalories}</div>
                        </div>
                    </div>

                )}

            </MetricsConsumer>
        )
    }
}

FatCalculator.contextType = MetricsContext;
