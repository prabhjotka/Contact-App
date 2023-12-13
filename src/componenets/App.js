
import React from "react";
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts=[

    {
      id:"1",
      name:"Sam",
      email:"sam@gmail.com",
  
    }
    ,
    {
      id:"2",
      name:"Ram",
      email:"Ram@gmail.com",
  
    }
    ,
    {
      id:"3",
      name:"ham",
      email:"ham@gmail.com",
  
    }
    , 
  ]
  return (
    <div className="ui container">
    <Header/>
    <AddContact/>
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
