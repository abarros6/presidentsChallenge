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
      <label htmlFor="address" className="form-label">
        Address:
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
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
      <label htmlFor="symptoms" className="form-label">
        Symptoms:
        <textarea
          id="symptoms"
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          className="form-textarea"
          required
        />
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
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default Form;