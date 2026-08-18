import { useState } from "react";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [name]: value
    });
  }

  return {
    values,
    handleChange
  };
}

export default useForm;