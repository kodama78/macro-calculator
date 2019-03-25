import React, { Component } from 'react';
import Input from './Input';
import { MetricsProvider} from "../context/MetricsContext";
import CaloriesContainer from '../calories/CaloriesContainer';
import MacrosContainer from '../macros/MacrosContainer';

import './InputContainer.css';

export default class InputContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: '0',
            weight: '0',
            fat: '0',
            occupation:'',
            workoutHours: '0',
            targetWeight: '0',
            totalCalories: '0',
            proteinCalories: '0',
            fatCalories: '0',
            proteinAmount: '0'
        }
        this.setInputMetrics = this.setInputMetrics.bind(this);
        this.occupationOptions = this.occupationOptions.bind(this);
        this.handleOccupation = this.handleOccupation.bind(this);
        this.handleProteinAmount = this.handleProteinAmount.bind(this);
        this.calculateTotalCalories = this.calculateTotalCalories.bind(this);
        this.calculateMacroCalories = this.calculateMacroCalories.bind(this);
    }

    calculateMacroCalories(targetWeight, proteinAmount, macroMultiplier) {
        const minimumProtein = 120;
        const tw = parseInt(targetWeight);
        const pd = parseFloat(proteinAmount);
        const mm = parseInt(macroMultiplier);
        const proteinGrams = tw * pd > minimumProtein ? tw*pd : minimumProtein;
        const proteinCalories = proteinGrams * mm;
        this.setState({proteinCalories: proteinCalories});
    }

    calculateTotalCalories(targetBodyWeight, occupationHours, workoutHours) {
        const tbw = parseInt(targetBodyWeight);
        const o = parseInt(occupationHours);
        const w = parseInt(workoutHours);
        const calories = tbw * (o + w);
        this.setState({totalCalories: calories})
    }

    handleOccupation(event) {
        this.setState({occupation: event.target.value});
    }

    handleProteinAmount(event){
        this.setState({proteinAmount: event.target.value})
    }

    setInputMetrics(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value})
    }

    occupationOptions() {
        const optionArray = [];
        for (let i = 9; i <= 16; i++ ) {
            optionArray.push(
                <option key={i} value={i} defaultValue={9}>
                {i} {i === 9 ? ' (think desk)' : ''} {i === 16 ? ' (think forest ranger)' : ''}
                </option>
            )
        }
        return optionArray;
    }

    render() {
        return (
            <MetricsProvider
                value={{
                    targetWeight:this.state.targetWeight,
                    occupation: this.state.occupation,
                    workoutHours: this.state.workoutHours,
                    calculateTotalCalories: this.calculateTotalCalories,
                    calculateMacroCalories: this.calculateMacroCalories,
                    totalCalories: this.state.totalCalories,
                    proteinCalories: this.state.proteinCalories,
                    fatCalories: this.state.fatCalories,
                    proteinAmount: this.state.proteinAmount
                }}>

                <Input type="text" name="height" value={this.state.height} onChange={this.setInputMetrics}/>
                <Input type="text" name="weight" value={this.state.weight} onChange={this.setInputMetrics}/>
                <Input type="text" name="fat" value={this.state.fat} onChange={this.setInputMetrics}/>
                <div>How active is your job, 9 being the lowest and 16 being the highest?</div>
                <div>Selected: {this.state.occupation}</div>
                <select type="select"
                        name="occupation"
                        value={this.state.occupation}
                        onChange={this.handleOccupation}>
                    {this.occupationOptions()}
                </select>
                <Input type="text"name="workoutHours"
                       value={this.state.workoutHours}
                       onChange={this.setInputMetrics}
                       title="How many hours do you work out"/>
                <Input type="text"
                       name="targetWeight"
                       title="What is your target weight"
                       value={this.state.targetWeight}
                       onChange={this.setInputMetrics}/>
                <div>Protein Amount from lowest to highest: {this.state.proteinAmount}</div>
                <select type="select"
                        name="protein"
                        value={this.state.proteinAmount}
                        onChange={this.handleProteinAmount}>
                    <option key={0.7} value={0.7} defaultValue={0.7}>0.7</option>
                    <option key={0.8} value={0.8}>0.8</option>
                    <option key={0.9} value={0.9}>0.9</option>
                    <option key={1.0} value={1.0}>1.0</option>
                </select>
                <CaloriesContainer/>
                <MacrosContainer/>
            </MetricsProvider>
        );
    }
}
