import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
      age: '',
      symptoms: '',
      medicalHistory: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Age:
        <input
          type='number'
          name='age'
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Symptoms:
        <textarea
          name='symptoms'
          value={formData.symptoms}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Medical History:
        <textarea
          name='medicalHistory'
          value={formData.medicalHistory}
          onChange={handleChange}
        />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;