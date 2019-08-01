// untuk penggunaan component class pake this
import React, { Component } from 'react'

export default class person extends Component {
    render() {
        return (
            <div>
               <p onClick={this.props.click}>i am {this.props.name} and i am {this.props.age} years old!</p>
               <p>{this.props.children}</p>
            </div>
        )
    }
}



// untuk penggunaan component function
// import React from 'react';

// const person = (props) => {
//     return(
//         <div>
//         <p onClick={props.click}>i am {props.name} and i am {props.age} years old!</p>
//         <p>{props.children}</p>
//      </div>
//     )
// };

// export default person;