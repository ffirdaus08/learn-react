import React ,{ Component }from 'react';
import './App.css';
import styless from './styless.module.css'
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

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor: 'pointer'
    
    }

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
      style.backgroundColor = 'red';
      
    }

    const classes = [];
    if (this.state.person.length <= 2){
      classes.push('red');
    }
    if (this.state.person.length <= 1){
      classes.push('bold');
    }
    
    return (
      <div className={styless.App}>
        <div>LEARN REACT</div>
          <p className={classes.join(' ')}>this is really working</p>
            <button style={style}
              onClick={this.togglePersonHandler}>Toggle Button</button>
            {persons}
      </div>
    )
  }
}


