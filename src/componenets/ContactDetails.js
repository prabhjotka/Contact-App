import React from "react";
import userFull from '../images/userFull.jpg';
import { useLocation } from 'react-router-dom'
const ContactDetails = function(props) {
    const location = useLocation()
    const { name,email} = location.state.contact
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={userFull} alt="user" />
                </div>
                <div className="content">
                    <div className="header">
                        {name}</div>
                    <div className="description">
                       {email}
                    </div>
                </div>
            </div>
        </div>




    );
}

export default ContactDetails;