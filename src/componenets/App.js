
import React from "react";
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
function App() {
  const LOCAL_STROAGE_KEY = "Contacts"
  const [contacts, setContacts] = useState([]);
  const generateUniqueId = () => {
    const prefix = 'contact_';
    const timestamp = Date.now();
    return `${prefix}${timestamp}`;
  };
  const contactHandler = function(contact) {

    setContacts([...contacts, { id: generateUniqueId(), ...contact }]);
  };
  const removeContact = function(id) {
    const newContactList = contacts.filter((contact) => {
      return contact.id != id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STROAGE_KEY));
    if (getContacts) setContacts(getContacts);

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
            contacts={contacts}
            getContactid={removeContact}
          />} />
          <Route path="/Contact/:id" element={<ContactDetails/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
