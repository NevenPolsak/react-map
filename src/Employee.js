import React from 'react';

const Employee = (props) => {
    const {name,lastname,age} = props;
    return (
        <div>
            <h2>Name: {name} {lastname} <br></br> Age: {age}</h2>
        </div>
    );
};

export default Employee;
