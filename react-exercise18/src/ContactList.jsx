import ContactItem from "./ContactItem";

function ContactList({
  contacts,
  dispatch,
  setEditingContact
}) {
  return (
    <div>
      <h2>Contacts</h2>

      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              dispatch={dispatch}
              setEditingContact={setEditingContact}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;