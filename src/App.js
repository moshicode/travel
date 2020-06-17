import React, { useState } from "react";
import Contact from "./components/Contact";

import "./App.css";
import ContactForm from "./components/contactForm";

function App() {
  const [contacts, setContacts] = useState([
    {
      fName: "John Smith",
      address: "Riviera State 32/106",
      company: "Twitter",
      job: "Graphic designer",
      phone: "0544884536",
      company_address: "795 Folsom Ave, Suit 600",
      img: "john-smith",
      id: 1,
    },
    {
      fName: "John Smith",
      address: "Riviera State 32/106",
      company: "Twitter",
      job: "Graphic designer",
      phone: "0544884536",
      company_address: "795 Folsom Ave, Suit 600",
      img: "john-smith",
      id: 2,
    },
    {
      fName: "John Smith",
      address: "Riviera State 32/106",
      company: "Twitter",
      job: "Graphic designer",
      phone: "0544884536",
      company_address: "795 Folsom Ave, Suit 600",
      img: "john-smith",
      id: 3,
    },
  ]);

  const [viewModal, setModal] = useState(false);

  const generateUID = () => "_" + Math.random().toString(36).substr(2, 9);

  const addContact = (newContact) => {
    const newContactsList = [
      ...contacts,
      {
        ...newContact,
        id: generateUID(),
      },
    ];
    setContacts(newContactsList);
  };

  const removeContact = (contactId) => {
    let contactList = [...contacts];
    let newContactList = contactList.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(newContactList);
  };

  return (
    <div className="App">
      {viewModal && <ContactForm />}
      <div className="container">
        <div className="row">
          <div className="contact-list">
            {contacts.map((contact, index) => (
              <Contact
                key={index}
                id={contact.id}
                contact={contact}
                removeContact={removeContact}
              />
            ))}
            <div className="col-md-6 add-new">
              <button>
                <i
                  className="fa fa-plus"
                  aria-hidden="true"
                  onClick={() => setModal(true)}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
