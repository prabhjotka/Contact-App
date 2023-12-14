import React from "react";
import user from '../images/user.png';
const ContactDetails = function() {
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <image src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">
                        Dippeash</div>
                    <div className="description">
                        cs@gmail.com
                    </div>
                </div>
            </div>
        </div>




    );
}

export default ContactDetails;