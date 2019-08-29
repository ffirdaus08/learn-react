import React ,{ Component }from 'react';
import './App.css';
import Person from './person/person'



export default class App extends Component {
  state = {
    person: [
      {id: '123c', name: 'max', age: 28},
      {id: '1234b', name: 'min', age: 29},
      {id: '12345a', name: 'average', age: 30}
    ],
      otherState: 'some other value',
      showPerson: false
  }

  //   switchNameHandler = (newName) => {
  //   // console.log('was clicked')
  //   this.setState({
  //     person: [
  //       {name: newName, age: 17},
  //       {name: 'firdaus', age: 27},
  //       {name: 'maxi', age: 37}
  //     ]
  //   })
  // }

    NameChangeHandler =(event , id) => {
      const personIndex = this.state.person.findIndex(p => {
        return p.id === id;
      });
      
      const person = {
        ...this.state.person[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.person];
      persons[personIndex] = person;
    this.setState({
      person: persons
    });
  }

    deletePersonHandler = (personIndex) => {
      const persons = [...this.state.person];
      persons.splice(personIndex, 1);
      this.setState({person: persons})
    }

     togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  render() {

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map((persons, index) =>{
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={persons.name}
            age={persons.age} 
            key={persons.id}
            changed={(event) => this.NameChangeHandler(event, persons.id)}
            />
          })}
        </div>
      )
    }
    
    return (
         <div className="App">
      <div>LEARN REACT</div>
      <button 
      onClick={this.togglePersonHandler}>Toggle Button</button>
      {persons}
    </div>
    )
  }
}


// const App = props => {
//   const [personState, setPersonState,] = useState ({
    // person: [
    //   {name: 'max', age: 28},
    //   {name: 'min', age: 29},
    //   {name: 'average', age: 30}
    // ],
    //   showPerson: false
//   });
  
//   const state ={
//     showPerson: false
//   }

//   const [otherState, setOtherState] = useState('some other value')

//   console.log(personState, otherState);

//   const switchNameHandler = (newName) => {
//     // console.log('was clicked')
//     setPersonState({
//       person: [
//         {name: newName, age: 17},
//         {name: 'firdaus', age: 27},
//         {name: 'maxi', age: 37}
//       ]
//     })
//   }

//   const NameChangeHandler =(event) => {
//     setPersonState({
//       person: [
//         {name: 'fahmi', age: 17},
//         {name: event.target.value, age: 27},
//         {name: 'maxi', age: 37}
//       ]
//     })
//   }

//   const togglePersonHandler = () => {
//     const doesShow = state.showPerson;
//     setState({showPerson: !doesShow})
//   }
  
//   return (
//     <div className="App">
//       <div>LEARN REACT</div>
//       <button 
//       onClick={togglePersonHandler}>Switch Name</button>
//       {
//         state.showPerson === true ?
//       <div>
//         <Person 
//           name={personState.person[0].name} 
//           age={personState.person[0].age}/>
//         <Person 
//           name={personState.person[1].name} 
//           age={personState.person[1].age}
//           click={switchNameHandler.bind(this, 'max!!!!')}
//           changed={NameChangeHandler}>
//         my hobies : racing</Person>
//         <Person 
//           name={personState.person[2].name} 
//           age={personState.person[2].age}/>
//       </div> : null
//       }
      
//     </div>
//   );
// }


// export default App;