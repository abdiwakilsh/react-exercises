import { useEffect, useState } from "react";

function ContactForm({
  dispatch,
  editingContact,
  setEditingContact
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
      setPhone(editingContact.phone);
    }
  }, [editingContact]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !phone) {
      return;
    }

    if (editingContact) {
      dispatch({
        type: "edit",
        payload: {
          id: editingContact.id,
          name: name,
          email: email,
          phone: phone,
          favorite: editingContact.favorite
        }
      });

      setEditingContact(null);
    } else {
      dispatch({
        type: "add",
        payload: {
          id: Date.now(),
          name: name,
          email: email,
          phone: phone,
          favorite: false
        }
      });
    }

    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingContact ? "Edit Contact" : "Add Contact"}</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">
        {editingContact ? "Update" : "Add"}
      </button>

      {editingContact && (
        <button
          type="button"
          onClick={() => {
            setEditingContact(null);
            setName("");
            setEmail("");
            setPhone("");
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default ContactForm;