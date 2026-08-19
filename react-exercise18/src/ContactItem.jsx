function ContactItem({
  contact,
  dispatch,
  setEditingContact
}) {
  return (
    <li>
      <h3>
        {contact.name} {contact.favorite && "★"}
      </h3>

      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>

      <button
        onClick={() =>
          dispatch({
            type: "toggleFavorite",
            payload: contact.id
          })
        }
      >
        {contact.favorite ? "Unfavorite" : "Favorite"}
      </button>

      <button onClick={() => setEditingContact(contact)}>
        Edit
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "delete",
            payload: contact.id
          })
        }
      >
        Delete
      </button>
    </li>
  );
}

export default ContactItem;