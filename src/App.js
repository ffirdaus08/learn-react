import React from 'react';
import './App.css';
import Person from './person/person'

function App() {
  return (
    <div className="App">
      <div>LEARN REACT</div>
      <Person name="fahmi" age="17"/>
      <Person name="fahmi f" age="12"/>
      <Person name="fahmi ff" age="15">My Hobbies : Racing</Person>
      <Person name="fahmi fff" age="15"/>
    </div>
  );
}

export default App;
