import React, { Component } from 'react';
import ProteinCalculator from './ProteinCalculator';
import FatCalculator from './FatCalculator';
import { MetricsConsumer } from "../context/MetricsContext";

export default class MacrosContainer extends Component {



    render() {
        return (
            <MetricsConsumer>
                {(context) => (
                    <div>
                        <ProteinCalculator/>
                        <FatCalculator/>
                        <div>
                            Carbohydrate Calories
                        </div>
                        <div>
                            {context.proteinCalories
                            && context.fatCalories
                            && context.totalCalories
                            && <div>
                                {context.totalCalories - context.proteinCalories - context.fatCalories}
                            </div>}

                        </div>
                    </div>
                )}

            </MetricsConsumer>
        )
    }
}
