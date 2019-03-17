import React, { Component } from 'react';
import Input from './Input';

export default class InputContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: '0',
            weight: '0',
            fat: '0',
            occupation:'unknown',
            workoutHours: '0'
        }
        this.setMetrics = this.setMetrics.bind(this);
    }

    setMetrics(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <Input name="height" value={this.state.height} onChange={this.setMetrics}/>
                <Input name="weight" value={this.state.weight} onChange={this.setMetrics}/>
                <Input name="fat" value={this.state.fat} onChange={this.setMetrics}/>
                <Input name="occupation" value={this.state.occupation} onChange={this.setMetrics}/>
                <Input name="workoutHours"
                       value={this.state.workoutHours}
                       onChange={this.setMetrics}
                       title="How many hours do you work out?"/>
            </div>
        );
    }
}
