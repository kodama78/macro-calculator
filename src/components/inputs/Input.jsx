import React from 'react';

const Input = (props) => {
    return (
        <div className="input">
            <span className="title">
                {props.title ? props.title : props.name} = {props.value}
            </span><br/>
            <input type={props.type} value={props.value} {...props} />
        </div>
    )
};

export default Input;