import useForm from "./useForm";

function ContactForm() {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    message: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form Data:", values);
  }

  return (
    <div>
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;