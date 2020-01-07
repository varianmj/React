import React, { Component } from 'react'

export default class ListStudent extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        
        return(
            <div>
                {this.props.students.map((student) => <p>{student}</p>)}
            </div>
            )
    }
}