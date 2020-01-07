// destructring
import React, { Component } from 'react'


import ListStudent from './ListStudent'

export default class FormStudent extends Component{
    // STATE
    constructor(){
        super()
        this.state = {
            students : ['varian'],
            currentStudentName: ''
        }
    }
    addStudent(){
        let currentStudents = this.state.students
        currentStudents.push(this.state.currentStudentName)
        this.setState({
            students: currentStudents

        })
    }
    render(){
        return(
            <div>
                <h2> THIS IS  FORM COMPONENT </h2>
                <span> { this.state.currentStudentName} </span><br/>
                <input 
                 type="text"
                 name= "student_name"
                 onChange={(e)=>this.setState({ currentStudentName: e.target.value})}/>
                <br/>
                <input 
                 type="submit"
                 value="Add student"
                 onClick={ ()=> this.addStudent()}
                />
                <h3> Students: </h3>
                <ListStudent students={this.state.students}></ListStudent>
                
            </div>

        )
    }
    
}