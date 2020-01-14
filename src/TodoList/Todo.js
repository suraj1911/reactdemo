import React from 'react'
const Todo = (props) => {
 
return (
<div className="page-content page-container" id="page-content">
   <div className="padding">
      <div className="row container d-flex justify-content-center">
         <div className="col-lg-12">
            <div className="card px-3">
               <div className="card-body">
                  <h4 className="card-title">Awesome Todo list</h4>
                  <div className="add-items d-flex"> 
                        <input type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" value={props.value}  /> 
                        <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={props.click}>Add</button> </div>
                        <div className="list-wrapper">
                            <div className="form-check"> 
                                    <label className="form-check-label"> 
                                        <input className="checkbox" type="checkbox"  onClick={props.click} readOnly/> 
                                        {props.title} 
                                        <i className="input-helper"></i>
                                    </label> 
                            </div>     
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
)
}
export default Todo