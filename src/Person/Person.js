import React from 'react'

const Person =(props) => {
            const style = {
                border:"1px solid black",
                height:"50px",
                width: "30%",
                marginBottom:"5px",
                padding:"13px 0px",
                display:"block",
                margin:"auto"
            }
            return(
                <div style={style}>
                    <input type = 'checkbox' name='chk' checked={props.check} onChange = {props.click}/> {props.name}
                    <input type="text" onChange={props.change} />
                </div>   
            )
} 

export default Person