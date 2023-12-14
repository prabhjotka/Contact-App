import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const EditContact=function({updateContactHandler})
{
    const location = useLocation()
    const {id, name,email} = location.state.contact
    const navigate=useNavigate();

    const [state,setState]=useState({
        id,
        name,
        email

    });
   const update=function(e)
   {
    e.preventDefault();
    if(!state.name||!state.email){
        alert("All the fields are required");
        return;
    }
    updateContactHandler(state);
    setState({name:"",email:""})
    navigate("/");
   }
    return(
        <>
    <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={update}>
            <div className="field">
                <label for="name">Name</label>
                <input type="text"
                 name="name"
                 placeholder="Enter name"
                 value={state.name}
                 onChange={(e)=>setState({...state,name:e.target.value})}/>
                <label for="email">Email</label>
                <input type="text" 
                name="email" 
                placeholder="Enter Email"
                value={state.email}
                onChange={(e)=>setState({...state,email:e.target.value})}/>
            </div>
            <button className="ui button blue">Update</button>



        </form>
    </div>
        </>
    );
}
export default EditContact;