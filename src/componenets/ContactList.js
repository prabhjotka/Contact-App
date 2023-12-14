import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useRef } from "react";
const ContactList = function(props) {
    const inputEl = useRef();
    const deleteContact = function(id) {
        props.getContactid(id);
    }
    const getSearchTerm = function() {
        props.searchKeyword(inputEl.current.value);
    }
    const renderList = props.contacts.map((contact, index) => {
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
            <br />
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        ref={inputEl}
                        type="text"
                        value={props.searchTerm}
                        onChange={getSearchTerm}
                        placeholder="search contact" className="prompt" />
                    <i className="search icon"></i>
                </div>
            </div>
            <br />
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>

            <div className="ui celled list" >
                {renderList.length > 0 ? renderList : " No Contact Available"}
            </div>
        </div>


    );



}
export default ContactList;