import React, { useState } from "react";

const AgeEmailPasswordVali = () => {
  const [form, setForm] = useState({
    email: "",
    age: 0,
    password: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <input
        type="text"
        name="email"
        placeholder="enter email"
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="enter age"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />

      <p>email :- {form.email}</p>
      <p>age :- {form.age}</p>
      <p>Password: {form.password}</p>
    </div>
  );
};

export default AgeEmailPasswordVali;
