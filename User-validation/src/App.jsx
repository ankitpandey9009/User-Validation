import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import List from "./components/List";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [inputarr, setInputarr] = useState([]);
  const navigate = useNavigate();

  const handleFormSubmit = (inputData) => {
    setInputarr([...inputarr, inputData]);
    setShowForm(false);
    navigate("/List");
  };

  return (
    <div>
      <Routes>
        <Route path="/registration" element={<RegistrationForm onSubmit={handleFormSubmit} />} />

        <Route path="/List" element={<List userDetails={inputarr} />} />
      </Routes>

      {showForm ? (
        <RegistrationForm onSubmit={handleFormSubmit} />
      ) : (
        <pre>
          <h2 className="confirmation">
            Hello {inputarr[inputarr.length - 1]?.name}, You've Registered Successfully.
          </h2>
        </pre>
      )}
    </div>
  );
}

export default App;
