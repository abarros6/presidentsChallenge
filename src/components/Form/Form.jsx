import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const Form = ({isFormComplete, setIsFormComplete}) => {

  const navigate = useNavigate();

    // Arrays for symptoms and hospitals
  const symptomsList = ['Fever', 'Cough', 'Headache', 'Fatigue', 'Shortness of breath', 'Diarrhea - No dehydration', 'Sore throat'];
  const hospitalsList = ['University Hospital', 'Victoria Hospital', "Children's Hospital"];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    healthCardNo: '',
    selectedHospital: '',
    symptoms: [],
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

  const handleSubmit = () => {
    setIsFormComplete(true)
    navigate('/Queue');
  };

  return (
    <div className={"card-form-container"}>
        <form className="card" >
          <label htmlFor="firstName" className="form-label">
            First Name:
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
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
              required
            />
          </label>
          <label htmlFor="selectedHospital" className="form-label">
            Hospital List: 
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
            <div class="select">
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
          
          <button onClick={handleSubmit} className="submit-button">Submit</button>
        </form>
    </div>
  );
};

export default Form;