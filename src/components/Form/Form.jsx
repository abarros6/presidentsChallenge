import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    healthCardNo: '',
    age: '',
    symptoms: '',
    medicalHistory: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      healthCardNo: '',
      age: '',
      symptoms: '',
      medicalHistory: '',
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="firstName" className="form-label">
        First Name:
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
      <label htmlFor="lastName" className="form-label">
        Last Name:
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
      <label htmlFor="healthCardNo" className="form-label">
        Health Card Number:
        <input
          type="text"
          id="healthCardNo"
          name="healthCardNo"
          value={formData.healthCardNo}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
      <label htmlFor="age" className="form-label">
        Age:
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="form-input"
          required
        />
      </label>
      <label htmlFor="hospital" className="form-label">
        Choose a hospital:
        <br></br>
        <select id="hosp" name="hosp">
            <option value="univ">University Hospital</option>
            <option value="sj">St. Joseph's Hospital</option>
            <option value="orange">Victoria Hospital</option>
            <option value="grape">St. Thomas Elgin Memorial Hospital</option>
        </select>
      </label>
      <label htmlFor="symptoms" className="form-label">
        Symptoms: <br />
        <div class= "container">
              <input type="checkbox" /> Cough <br />
              <input type="checkbox" /> Fever <br />
              <input type="checkbox" /> Chest Pain <br />
              <input type="checkbox" /> Diarrhea <br />
              <input type="checkbox" /> Abdominal Pain <br />
              <input type="checkbox" /> Headache <br />
              <input type="checkbox" /> Weight Loss <br />
              <input type="checkbox" /> Nausea <br />
              <input type="checkbox" /> Vomiting <br />
              <input type="checkbox" /> Confusion <br />
              </div>
      </label>
      <label htmlFor="medicalHistory" className="form-label">
        Medical History:
        <textarea
          id="medicalHistory"
          name="medicalHistory"
          value={formData.medicalHistory}
          onChange={handleChange}
          className="form-textarea"
        />
      </label>
      <button type="submit" className="submit-button">Enter Queue</button>
    </form>
  );
};

export default Form;