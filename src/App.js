import React from 'react';
import './App.css';
import Person from './person/person'

class App extends React.Component {
  state = {
    person: [
      {name: 'max', age: 28},
      {name: 'min', age: 29},
      {name: 'average', age: 30}
    ]
  }
  render(){
  return (
    <div className="App">
      <div>LEARN REACT</div>
      <button>Switch Name</button>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
      <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
    </div>
  );
}
}

export default App;
