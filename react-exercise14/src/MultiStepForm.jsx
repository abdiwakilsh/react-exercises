import { useReducer } from "react";
import { initialState, formReducer } from "./formReducer";

function MultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  function changeInput(e) {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value
    });
  }

  function next() {
    dispatch({ type: "NEXT_STEP" });
  }

  function back() {
    dispatch({ type: "PREV_STEP" });
  }

  function reset() {
    dispatch({ type: "RESET_FORM" });
  }

  function submitForm() {
    alert("Form submitted successfully!");
    reset();
  }

  return (
    <div>
      <h2>Registration Form</h2>

      <p>Step {state.step} of 3</p>

      {state.step === 1 && (
        <div>
          <h3>Profile</h3>

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={state.firstName}
            onChange={changeInput}
          />

          <br /><br />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={state.lastName}
            onChange={changeInput}
          />

          <br /><br />

          <button onClick={next}>Next</button>
        </div>
      )}

      {state.step === 2 && (
        <div>
          <h3>Contact</h3>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={changeInput}
          />

          <br /><br />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={state.phone}
            onChange={changeInput}
          />

          <br /><br />

          <button onClick={back}>Back</button>
          <button onClick={next}>Next</button>
        </div>
      )}

      {state.step === 3 && (
        <div>
          <h3>Review</h3>

          <p>First Name: {state.firstName}</p>
          <p>Last Name: {state.lastName}</p>
          <p>Email: {state.email}</p>
          <p>Phone: {state.phone}</p>

          <button onClick={back}>Back</button>
          <button onClick={submitForm}>Confirm</button>
        </div>
      )}
    </div>
  );
}

export default MultiStepForm;