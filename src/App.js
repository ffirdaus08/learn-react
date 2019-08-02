import React ,{ useState }from 'react';
import './App.css';
import Person from './person/person'

const App = props => {
  const [personState, setPersonState] = useState ({
    person: [
      {name: 'max', age: 28},
      {name: 'min', age: 29},
      {name: 'average', age: 30}
    ]
  });

  const [otherState, setOtherState] = useState('some other value')

  console.log(personState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('was clicked')
    setPersonState({
      person: [
        {name: newName, age: 17},
        {name: 'firdaus', age: 27},
        {name: 'maxi', age: 37}
      ]
    })
  }

  const NameChangeHandler =(event) => {
    setPersonState({
      person: [
        {name: 'fahmi', age: 17},
        {name: event.target.value, age: 27},
        {name: 'maxi', age: 37}
      ]
    })
  }
  
  return (
    <div className="App">
      <div>LEARN REACT</div>
      <button onClick={() => switchNameHandler('max!')}>Switch Name</button>
      <Person 
        name={personState.person[0].name} 
        age={personState.person[0].age}/>
      <Person 
        name={personState.person[1].name} 
        age={personState.person[1].age}
        click={switchNameHandler.bind(this, 'max!!!!')}
        changed={NameChangeHandler}>
      my hobies : racing</Person>
      <Person 
        name={personState.person[2].name} 
        age={personState.person[2].age}/>
    </div>
  );
}


export default App;