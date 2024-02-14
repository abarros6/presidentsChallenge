import React, { useState } from 'react';
import './Form.css';

const Form = () => {

    // Arrays for symptoms and hospitals
  const symptomsList = ['Fever', 'Cough', 'Headache', 'Fatigue', 'Shortness of breath'];
  const hospitalsList = ['Hospital A', 'Hospital B', 'Hospital C', 'Hospital D', 'Hospital E'];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    healthCardNo: '',
    age: '',
    selectedHospital: '',
    symptoms: [],
    medicalHistory: '',
  });

    // Handle checkbox changes for symptoms
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
    
        setFormData((prevData) => ({
          ...prevData,
          symptoms: checked
            ? [...prevData.symptoms, name]
            : prevData.symptoms.filter((symptom) => symptom !== name),
        }));
      };
    
      // Handle dropdown change for hospitals
      const handleDropdownChange = (e) => {
        const { value } = e.target;
        setFormData((prevData) => ({ ...prevData, selectedHospital: value }));
      };

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
      healthCardNo: '',
      age: '',
      selectedHospital: '',
      symptoms: [],
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
      <label htmlFor="selectedHospital" className="form-label">
        Hospital List: <br></br>
        <select
          id="selectedHospital"
          name="selectedHospital"
          value={formData.selectedHospital}
          onChange={handleDropdownChange}
          className="form-dropdown"
          required
        >
          <option value="" disabled>Select a hospital</option>
          {hospitalsList.map((hospital) => (
            <option key={hospital} value={hospital}>{hospital}</option>
          ))}
        </select>
      </label>
      <label htmlFor="symptoms" className="form-label">
        Symptoms:
        <div class="container">
          {symptomsList.map((symptom) => (
            <label key={symptom}>
              <input
                type="checkbox"
                name={symptom}
                checked={formData.symptoms.includes(symptom)}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              /> 
              {symptom}<br></br>
            </label>
          ))}
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