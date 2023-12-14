
import React from "react";
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import { useState, useEffect } from "react";
import api from '../api/contact';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import EditContact from "./EditContact";

function App() {
  const LOCAL_STROAGE_KEY = "Contacts"
  const [contacts, setContacts] = useState([]);
  const [searchTerm,setSearchTerm]=useState("");
  const [searchResult,setSearchResult]=useState([]);
  const reteriveContacts=async ()=>
  {
    const response=await api.get("/contacts");
    return response.data;
  }
  const generateUniqueId = () => {
    const prefix = 'contact_';
    const timestamp = Date.now();
    return `${prefix}${timestamp}`;
  };
  const updateContactHandler=async function(contact)
  {
   
    
    const response=await api.put(`/contacts/${contact.id}`,contact)
    const{id,name,email}=response.data; 
    setContacts(contacts.map((contact)=>{
      return contact.id==id ?{...response.data}:contact;
     }));
      
  }
  const contactHandler = async function(contact) {

    const request={
      id: generateUniqueId(),
      ...contact
    }
    const response=await api.post("/contacts",request)
    setContacts([...contacts, response.data]);
  };

  const removeContact = async function(id) {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id != id;
    });
    setContacts(newContactList);
  }
  const searchHandler=function(searchTerm)
  {
     setSearchTerm(searchTerm);
    if(searchTerm!==""){
      const newContactList=contacts.filter((contact)=>{
        return Object.values(contact)
        .join(" ").toLowerCase()
        .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    }
    else{
      setSearchResult(contacts);
    }

  }

  useEffect(() => {
    // const getContacts = JSON.parse(localStorage.getItem(LOCAL_STROAGE_KEY));
    // if (getContacts) setContacts(getContacts);
    const getAllContacts=async()=>{
      const allContact=await reteriveContacts();
      if(allContact)setContacts(allContact);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STROAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/add" element={<AddContact contactHandler={contactHandler} />} />
        <Route path="/"
          element={<ContactList
            contacts={searchTerm.length <1 ? contacts : searchResult}
            getContactid={removeContact}
            searchTerm={searchTerm}
            searchKeyword={searchHandler}
          />} />
           <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler} />} />
          <Route path="/Contact/:id" element={<ContactDetails/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
