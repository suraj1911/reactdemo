import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Radium, {StyleRoot} from 'radium'; // This Third party plugin used for sudeo and for media Query npm install --save radium; 
// import styled from 'styled-components';
import Person from './Person/Person';


/*const StyleButton = styled.button`
        background-color: ${ props => props.alt ? "red" : "green"};
        width:130px;
        border:1px solid black;
        color:yellow;

        &:hover {
            background-color : ${ props => props.alt ? "salmon" : "lightgreen"};
            color:black;
        }
`;*/

class App extends Component{
   
    state = {
        persons : [
                    {id:1, name : 'To Do List 1' , checked : true},
                    {id:2, name : 'To Do List 2' , checked : false},
                    {id:3, name : 'To Do List 3' , checked : false}
                 ],
                    showPerson : false
    }

    changeHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState ({
            showPerson :!doesShow
        });
    }

    delHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({
            persons : persons
        })
    };

    changeNameHandler = (event,id) =>{
        //console.log(id);
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id 
        });

        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];

        persons[personIndex] = person;
        
        this.setState({
                persons : persons
        })
    }

    render(){

        const style = {
         
        };

        let persons = null;
        if(this.state.showPerson){
            persons = (
                <div>
                     {this.state.persons.map((person,index)=> {
                    return(
                        <Person
                        click = {()=>this.delHandler(index)}                         
                        name ={person.name} 
                        check= {person.checked}
                        key={person.id}
                        change = {(event) => this.changeNameHandler(event,person.id)}
                        />
                    )
                  })} 
                </div>
            )
           //style.backgroundColor = 'salmon';
            /*style[':hover'] = {
                    backgroundColor:'green'
            }*/
        }

        return(
           
                <div className='App'>
                    <h2> Welcome To Toogle Button Action</h2>
                    <button class="button" onClick={this.changeHandler}>Toggle Change</button>
                    <hr/>
                    {persons}
                </div>
            
        )
    }   
};

export default App;
