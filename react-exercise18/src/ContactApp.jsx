import { useReducer, useState } from "react";
import { reducer, initialState } from "./reducer";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

function ContactApp() {
  const [contacts, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [editingContact, setEditingContact] = useState(null);

 return (
  <div>
    <h1>Contact App</h1>

    <div style={{ marginBottom: "30px" }}>
      <ContactForm
        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />
    </div>

    <div>
      <ContactList
        contacts={contacts}
        dispatch={dispatch}
        setEditingContact={setEditingContact}
      />
    </div>
  </div>
);
}

export default ContactApp;