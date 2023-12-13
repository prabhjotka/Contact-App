import React from "react";
const AddContact=function()
{
    return(
        <>
    <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
            <div className="field">
                <label for="name">Name</label>
                <input type="text" name="name" placeholder="Enter name"/>
                <label for="email">Email</label>
                <input type="text" name="email" placeholder="Enter Email"/>
            </div>
            <button className="ui button">Submit</button>



        </form>
    </div>
        </>
    );
}
export default AddContact;