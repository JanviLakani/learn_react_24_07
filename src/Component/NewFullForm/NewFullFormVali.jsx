
import React, { useState } from 'react';
// import Textinput from "../Itemcomponent7/Textinput"; 
import Textinput from "../Itemcomponent7_new/Textinput";
import TextDropdown from "./TextDropdown";
import CheckboxHobbies from "./CheckboxHobbies";
import "./FormColor.css";
import RadioGender from "./RadioGender";
import TextAreaAddress from "./TextAreaAddress";

const NewFullFormVali = () => {

    const [form, setForm]=useState({
          email: "",
    age: "",
    password: "",
    country: "",
    hobbies: [],
    gender: "",
    address: "",
    })

    const [errors, setErrors] = useState({});

  let countryLabels = {
    in: "India",
    uk: "London",
    us: "USA",
  };

  const handleError = () => {
    let formErr = false;
    let newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      formErr = true;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format.";
      formErr = true;
    } else {
      newErrors.email = "";
    }

    if (!form.age || form.age <= 18) {
      newErrors.age = "Age must be above 18 ";
      formErr = true;
    } else {
      newErrors.age = "";
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
      formErr = true;
    } else if (form.password.length < 8) {
      newErrors.password = "Password ,ore than 8 word.";
      formErr = true;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        form.password
      )
    ) {
      newErrors.password = "Password minimum 8 num & special character.";
      formErr = true;
    } else {
      newErrors.password = "";
    }

    if (!form.country || form.country === "0") {
      newErrors.country = "Please select a country.";
      formErr = true;
    } else {
      newErrors.country = "";
    }

    if (form.hobbies.length === 1) {
      newErrors.hobbies = "please select minimum two hobby.";
      formErr = true;
    } else {
      newErrors.hobbies = "";
    }

    if (form.gender === "") {
      newErrors.gender = "Please select gender.";
      formErr = true;
    } else {
      newErrors.gender = "";
    }

    if (!form.address.trim()) {
      newErrors.address = "address is required.";
      formErr = true;
    } else {
      newErrors.address = "";
    }

    setErrors(newErrors);
    return formErr;
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    setForm((old) => ({
      ...old,
      hobbies: checked
        ? [...old.hobbies, value]
        : old.hobbies.filter((hobbi) => hobbi !== value),
    }));
  };

  // onSubmit={ () => handleSubmir()}

  const handleSubmit = (e) => {
    e.preventDefault();

    const showError = handleError();
  };


    return (
        <div>
             {/* ({ type, name, placeholder, onChange, label ,error })  */}
      <form action="" onSubmit={handleSubmit}>
        <Textinput
          type="text"
          name="email"
          placeholder="enter email"
          onChange={handleChange}
          value={form.email}
          error={errors.email}
        />
        <br />
        <br />
        <Textinput
          type="number"
          name="age"
          placeholder="enter age"
          onChange={handleChange}
          value={form.age}
          error={errors.age}
        />
        <br />
        <br />
        <Textinput
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          value={form.password}
          error={errors.password}
        />
        <br />
        <br />
        {/* <select name="country" id="country" onChange={handleChange}>
                  <option value="0">--select--</option>
                   <option value="in">india</option>
                    <option value="uk">london</option>
                </select> <br /><br />
  */}
        <TextDropdown
          name={"country"}
          label="Select Your Country :-"
          onChange={handleChange}
          value={form.country}
          error={errors.country}
          options={[
            { value: "0", label: "-- Select Country --" },
            { value: "in", label: "India" },
            { value: "uk", label: "London" },
            { value: "us", label: "USA" },
          ]}
        />
        <br />
        <br />
        <CheckboxHobbies
          name="hobbies"
          label="Select Your Hobbies :-"
          options={[
            { value: "reading", label: "Reading" },
            { value: "cooking", label: "Cooking" },
            { value: "traveling", label: "Traveling" },
            { value: "dancing", label: "Dancing" },
          ]}
          selectedValues={form.hobbies}
          onChange={handleHobbyChange}
          error={errors.hobbies}
        />
        <br />
        <br />
        <RadioGender
          name="gender"
          label="Select Gender"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          selectedValue={form.gender}
          onChange={handleChange}
          error={errors.gender}
        />
        <br />
        <br />

        <TextAreaAddress
          name="address"
          label="Your address"
          value={form.address}
          onChange={handleChange}
          error={errors.address}
        />
        <input type="submit" />
      </form>

      <p>email :- {form.email}</p>
      <p>age :- {form.age}</p>
      <p>Password: {form.password}</p>
      <p>Country: {countryLabels[form.country]}</p>

      <p>Hobbies: {form.hobbies.join(", ")}</p>

      <p>Gender: {form.gender}</p>

      <p>address: {form.address}</p>
        </div>
    );
};

export default NewFullFormVali;