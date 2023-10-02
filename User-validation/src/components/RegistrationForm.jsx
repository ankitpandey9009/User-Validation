import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm({ onSubmit }) {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mandatory");
    } else {
      onSubmit(inputData);
      setInputData({ name: "", email: "", password: "" });
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="header">
        <h1>Registration Form</h1>
      </div>
      <div className="details">
        <input
          type="text"
          className="user"
          placeholder="Enter Your Name"
          name="name"
          id="name"
          value={inputData.name}
          autoComplete="on"
          onChange={handleData}
        ></input>
        <br></br>
        <input
          type="text"
          className="user"
          placeholder="Enter Your Email"
          name="email"
          id="email"
          value={inputData.email}
          autoComplete="on"
          onChange={handleData}
        ></input>
        <br></br>
        <input
          type="password"
          className="user"
          placeholder="Enter Your Password"
          name="password"
          id="password"
          value={inputData.password}
          autoComplete="on"
          onChange={handleData}
        ></input>
        <br></br>
      </div>
      <button type="submit" className="result">
        Submit
      </button>
    </form>
  );
}

export default RegistrationForm;
