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
    <form onSubmit={handleSubmit}>
      <label className='first_name_label'>
        First Name:
        <input className='first_name_input'
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <label className='last_name_label'>
        Last Name:
        <input className='last_name_input'
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <label className='address_label'>
        Address:
        <input className='address_input'
          type='text'
          name='address'
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      <label className='haelthCardNo_label'>
        Health Card Number:
        <input className='healthCardNo_input'
          type='text'
          name='healthCardNo'
          value={formData.healthCardNo}
          onChange={handleChange}
          required
        />
      </label>
      <label className='age_label'>
        Age:
        <input className='age_input'
          type='number'
          name='age'
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>
      <label className='symptoms_label'>
        Symptoms:
        <textarea className='symptoms_textarea'
          name='symptoms'
          value={formData.symptoms}
          onChange={handleChange}
          required
        />
      </label>
      <label className='medicalHistory_label'>
        Medical History:
        <textarea className='medicalHistory_textarea'
          name='medicalHistory'
          value={formData.medicalHistory}
          onChange={handleChange}
        />
      </label>
      <button className='submit_button' type='submit'>Submit</button>
    </form>
  );
};

export default Form;