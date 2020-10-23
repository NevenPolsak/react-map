import React from 'react';
import './App.css';
import Employee from './Employee'


const employeeInfo = [
  {
      id:"1",
      name:"Jack",
      lastname:"Bower",
      age:"69"
  },
  {
      id:"2",
      name:"Marry",
      lastname:"Kerry",
      age:"96"
  }

];

function App() {
  return (
    <div className="App">
      <h1>Employess</h1>
            {employeeInfo.map((employee) => {
            return <Employee  key={employee.id} name={employee.name} lastname={employee.lastname} age={employee.age} />
            }
           )}
    </div>
  );
}

export default App;
