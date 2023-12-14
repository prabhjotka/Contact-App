import React from "react";
import user from '../images/user.png';
import { Link } from "react-router-dom";
const ContactCard=function(props)
{
    const{id,name,email}=props.contacts;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="content">
           <div className="header">
           <Link to={`/contact/${id}`}> {name}</Link> 
               
            </div>
            <div><Link to=""> {email}</Link> </div>
        </div>

   <i className="trash alternate outline icon" 
   style={{color:"red",marginTop:"7px"}}
   onClick={()=>props.clickHandler(id)}
   ></i>
    </div>
    );
   
}
export default ContactCard;