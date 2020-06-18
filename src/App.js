import React, { useState, useEffect } from "react";

import ContactCard from "./components/ContactCard";
import data from "./data"; // DEMO DATA

import ContactForm from "./components/contactForm";
import axios from "axios";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState(data);

  const generateUID = () => "_" + Math.random().toString(36).substr(2, 9);

  const addContact = async (contactData) => {
    const newContact = Object.assign(contactData, {
      id: await generateUID(),
      location: await getLocation(contactData.country),
    });

    const newContactList = await [...contacts, newContact];
    await setContacts(newContactList);
  };

  const removeContact = (contactId) => {
    let contactList = [...contacts];
    let newContactList = contactList.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(newContactList);
  };

  const getLocation = async (country) => {
    try {
      const locationData = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${country}&key=3f0de760833f4f2f928d25fcf57973b0`
      );
      console.log(locationData.data.results[0].annotations.DMS.lat);
      return await {
        lat: locationData.data.results[0].annotations.DMS.lat,
        long: locationData.data.results[0].annotations.DMS.lng,
      };
    } catch (e) {
      console.log(e);
      return "Error occurred while saving task";
    }
  };

  return (
    <>
      <div className="container contact-list">
        <div className="row">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              id={contact.id}
              contact={contact}
              removeContact={removeContact}
              getLocation={getLocation}
            />
          ))}
        </div>
      </div>
      <ContactForm addContact={addContact} getLocation={getLocation} />
    </>
  );
}

export default App;
