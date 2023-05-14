
import { Navbar } from '../../Navbar/Navbar';
import React, { useState } from "react";
import "./support.css";
function Support() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/api/support", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (

    <div className="form-container">
      <Navbar />
      <label className="form-label" htmlFor="name">
        Name:
      </label>
      <input
        className="form-input"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <label className="form-label" htmlFor="email">
        Email:
      </label>
      <input
        className="form-input"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <label className="form-label" htmlFor="issue">
        Describe the issue:
      </label>
      <textarea
        className="form-textarea"
        id="issue"
        name="issue"
        value={formData.issue}
        onChange={handleInputChange}
      ></textarea>
      <button className="form-submit" type="submit">
        Submit
      </button>
    </div>
  );
}

export default Support;
