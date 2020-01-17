import React from 'react';
import classes from './Person/Person.module.css';

//import Radium from 'radium';
let btnClass = [classes.Button];
const Person =(props) => {
        
            return(
                <div >
                    <input type = 'checkbox' name='chk' checked={props.check} onChange = {props.click}/> {props.name}
                    <input type="text" onChange={props.change} />
                    <button className={btnClass.join(' ')}>New Button</button>
                </div>   
            )
} 

export default Person;