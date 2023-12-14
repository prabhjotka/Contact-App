import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = function(props) {

    const deleteContact = function(id) {
        props.getContactid(id);
    }

    const renderList = props.contacts.map((contact,index) => {
        return (
            <ContactCard
                key={index}
                contacts={contact}
                clickHandler={deleteContact}
            />
        );
    });
    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>

            <div className="ui celled list">
                {renderList}
            </div>
        </div>


    );



}
export default ContactList;