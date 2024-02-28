import React, { useState } from 'react';
import './Form.scss';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';

const Form = ({code, setCode, isFormComplete, setIsFormComplete}) => {

  function initValues(numValues) {
    const values = new Array(numValues);
    // fill the array with each value
    for (let i = 0; i < values.length; i++) {
        values[i] = i;
    }
    return values;
  }

  function getValue(array) {
      if (!array.length) {
          throw new Error("array is empty, no more random values");
      }
      const i = Math.floor(Math.random() * array.length);
      const returnVal = array[i];
      array.splice(i, 1);
      return returnVal;
  }

  function handleFormSubmit(e){
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.healthCardNo || !formData.hospital || formData.symptoms.length === 0) {
      toggleWarning();
      return;
    }else{
      togglePopup();
    }
  }

  const idPool = initValues(9999)//4-digit number code 

  const navigate = useNavigate();

    // Arrays for symptoms and hospitals
  const symptomsList = ['Hypertension with no symptoms', 'Mild burn', 'Constipation - Mild pain', 'Minor trauma wounds', 'Mild anxiety/agitation',
   'Shortness of breath', 'Diarrhea - No dehydration', 'Sore throat', 'Minor vaginal bleeding/spotting - Not pregnant'];
  const hospitalsList = ['University Hospital'];

  const [popup, setPopup] = useState(false)

  const [warning, setWarning] = useState(false)

  const toggleWarning = () => {
    setWarning(!warning);
  };

  const togglePopup = () => {
    setPopup(!popup);
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    healthCardNo: '',
    hospital: '',
    symptoms: [],
    id: getValue(idPool),
  });

  async function enterQueue(data) {
    const res = await fetch('/api/patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data
      })
    })
      return res.json()
  }

  const popupButtonOnClick = async e => {
    e.preventDefault();
    enterQueue(formData).then((data) => {
      if (data.success) {
          setIsFormComplete(true)
          setCode(formData.id)
          navigate('/Queue');
      }
    })
  };

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
    setFormData((prevData) => ({ ...prevData, hospital: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      {popup  &&
        <Popup
          popupButtonOnClick = {popupButtonOnClick}
          togglePopup = {togglePopup}
          popup={popup}
          setPopup={setPopup}
          popupTitle={"Record your Queue Code to re-enter the queue in case you leave."}
          popupText={`Your Queue Code is ${formData.id}`}
          warning={false}
        />
      }
      {warning &&
        <Popup
          popupButtonOnClick = {popupButtonOnClick}
          togglePopup = {toggleWarning}
          popup={warning}
          setPopup={setPopup}
          popupTitle={"Please complete all required fields"}
          popupText={`your unique code is ${formData.id}`}
          warning={true}
        />
      }
      {
        !popup && !warning &&
        <div className={"main-container"}>
          <h1 className='main-header'>Form</h1>
            <form className="card align-inititial" >
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
              <label htmlFor="hospital" className="form-label">
                Hospital List: 
                <select
                  id="hospital"
                  name="hospital"
                  value={formData.hospital}
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
              
              <button onClick={handleFormSubmit} className="submit-button">Submit</button>
            </form>
        </div>
      }
    </>
  );
};

export default Form;