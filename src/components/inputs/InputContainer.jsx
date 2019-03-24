import React, { Component } from 'react';
import Input from './Input';
import { MetricsProvider} from "../context/MetricsContext";
import CaloriesContainer from '../calories/CaloriesContainer';

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
            targetWeight: '0'
        }
        this.setInputMetrics = this.setInputMetrics.bind(this);
        this.createOptions = this.createOptions.bind(this);
        this.handleOccupation = this.handleOccupation.bind(this);
    }

    handleOccupation(event) {
        this.setState({occupation: event.target.value});
    }

    setInputMetrics(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value})
    }

    createOptions() {
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
                    workoutHours: this.state.workoutHours
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
                    {this.createOptions()}
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
                <CaloriesContainer targetWeight={this.state.targetWeight}
                                   occupation={this.state.occupation}
                                   workoutHours={this.state.workoutHours}/>
            </MetricsProvider>
        );
    }
}
