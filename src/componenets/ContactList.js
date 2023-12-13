import React from "react";
import ContactCard from "./ContactCard";
const ContactList=function(props){
const renderList=props.contacts.map((contact)=>{
    return(
       <>
       <ContactCard 
       name={contact.name}
       email={contact.email}
       
       />

       </>
        

    );
});
return(
<>
<div className="ui celled list">
    {renderList}
</div>
</>
);



}
export default  ContactList;