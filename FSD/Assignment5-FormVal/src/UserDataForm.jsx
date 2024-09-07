import React, { useState } from 'react';
import './UserDataForm.css'; 

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
        <div className='form-element'>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errorMessage.includes('Name') ? 'error' : ''}
          />
        </div>
        <div className='form-element'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errorMessage.includes('Email') ? 'error' : ''}
          />
        </div>
        <div className='form-element'>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={errorMessage.includes('Age') ? 'error' : ''}
          />
        </div>
        <div className='form-element'>
          <label>Mobile No:</label>
          <input
            type="number"
            name="mobileno"
            value={formData.mobileno}
            onChange={handleChange}
            className={errorMessage.includes('Mobile') ? 'error' : ''}
          />
        </div>
        <div className='form-element'>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={errorMessage.includes('Address') ? 'error' : ''}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default UserDataForm;
