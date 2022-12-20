import React from "react";
import { useForm } from "react-hook-form";

import "./styles.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      age: "",
      profession: ""
    }
  });

  return (
    <div data-test-id="app">
      <form
        data-test-id="sign-up-form"
        onSubmit={handleSubmit((data) => {
          fetch('/api/sign-up', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              ...data,
              name: data.name.trim(), 
              age: data.age.trim(),
            }),
          });
        })}
      >
        <label>Name</label>
        <input 
          {...register("name")} 
          data-test-id="name"
          defaultValue="test" 
        />
        <label>Age</label>
        <input
          data-test-id="age"
          {...register("age", { required: true, maxLength: 10, pattern: /^[0-9]+$/i })}
        />
        {errors.age && <p>Wrong value</p>}
        <label>Profession</label>
        <select data-test-id="profession" {...register("profession", { required: true})}>
          <option value="driver">driver</option>
          <option value="doctor">doctor</option>
          <option value="teacher">teacher</option>
        </select>
        {errors.profession && <p>Wrong value</p>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;