import React, { useState } from 'react';
import './UserDataForm.css'; 
import FormElement from './FormElement';

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    mobileno: '',
    address: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = '';
    let formIsValid = true;

    if (!formData.name.trim()) {
      error = 'Name is required';
      formIsValid = false;
    } else if (!formData.email.trim()) {
      error = 'Email is required';
      formIsValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      error = 'Please enter a valid email address';
      formIsValid = false;
    } else if (!formData.age.trim()) {
      error = 'Age is required';
      formIsValid = false;
    } else if (!formData.mobileno.trim()) {
      error = 'Mobile number is required';
      formIsValid = false;
    } else if (formData.mobileno.length !== 10) {
      error = 'Mobile number must be 10 digits long';
      formIsValid = false;
    } else if (!formData.address.trim()) {
      error = 'Address is required';
      formIsValid = false;
    }

    if (formIsValid) {
      setSuccessMessage('Form submitted successfully!');
      setErrorMessage('');
      setFormData({
        name: '',
        email: '',
        age: '',
        mobileno: '',
        address: ''
      });
    } else {
      setSuccessMessage('');
      setErrorMessage(error);  
    }
  };

  return (
    <div className='userdataform'>
      <h2>User Data Form</h2>
      <form onSubmit={handleSubmit}>
        <FormElement name={"name"} label={"Name:"} value={formData.name} onChange={handleChange} className={errorMessage.includes('Name') ? 'error' : ''}/>
        <FormElement name={"email"} label={"Email:"} value={formData.email} onChange={handleChange} className={errorMessage.includes('Email') ? 'error' : ''}/>
        <FormElement name={"age"} label={"Age:"} value={formData.age} onChange={handleChange} className={errorMessage.includes('Age') ? 'error' : ''}/>
        <FormElement name={"mobileno"} label={"Mobile No:"} value={formData.mobileno} onChange={handleChange} className={errorMessage.includes('Mobile') ? 'error' : ''}/>
        <FormElement name={"address"} label={"Address:"} value={formData.address} onChange={handleChange} className={errorMessage.includes('Address') ? 'error' : ''}/>
        <button type="submit">Submit</button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default UserDataForm;
