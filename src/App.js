import React from 'react';
import './App.css';
import Person from './person/person'

class App extends React.Component {
  state = {
    person: [
      {name: 'max', age: 28},
      {name: 'min', age: 29},
      {name: 'average', age: 30}
    ],
    otherState : 'other some value'
  }
  switchNameHandler = () => {
    // console.log('was clicked')
    this.setState({
      person: [
        {name: 'fahmi', age: 17},
        {name: 'firdaus', age: 27},
        {name: 'maxi', age: 37}
      ]
    })
  }
  render(){
  return (
    <div className="App">
      <div>LEARN REACT</div>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
      <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
    </div>
  );
}
}

export default App;
