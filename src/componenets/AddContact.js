import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AddContact=function({contactHandler})
{
    const navigate=useNavigate();
    const [state,setState]=useState({
        name:"",
        email:""

    });
   const handleSubmit=function(e)
   {
    e.preventDefault();
    if(!state.name||!state.email){
        alert("All the fields are required");
        return;
    }
    contactHandler(state);
    setState({name:"",email:""})
    navigate("/");
   }
    return(
        <>
    <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={handleSubmit}>
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
            <button className="ui button blue">Submit</button>



        </form>
    </div>
        </>
    );
}
export default AddContact;