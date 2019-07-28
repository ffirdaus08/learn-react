import React, { Component } from 'react'

export default class person extends Component {
    render() {
        return (
            <div>
               i am {this.props.name} and i am {this.props.age} years old!
            </div>
        )
    }
}
