import React, { useState } from 'react';
import classes from './SignUp.modules.css';

const DoctorSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    gender: '',
    phoneNumber: '',
    specialization: '',
    medicalLicenseNumber: '',
    hospital: '',
  });

  const specializations = [
    'General Practitioner',
    'Physician',
    'Dentist',
    'Pediatrician',
    'Gynecologist',
    'Cardiologist',
    'Dermatologist',
    'Orthopedic Surgeon',
    'Neurologist',
    'Psychiatrist',
    'Ophthalmologist',
    'Otolaryngologist',
    'Urologist',
    'Endocrinologist',
    'Gastroenterologist',
    'Pulmonologist',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Doctor Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            min={3}
          />
          <p className={classes.errorMessage}></p>
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            min={3}
          />
          <p className={classes.errorMessage}></p>
        </div>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
          />
          <p className={classes.errorMessage}></p>
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p className={classes.errorMessage}></p>
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            min={10}
          />
          <p className={classes.errorMessage}></p>
        </div>
        <div>
          <label>Specialization:</label>

          <select
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
          >
            <option value="">Select Specialization</option>
            {specializations.map((specialization) => (
              <option value={specialization} key={specialization}>
                {specialization}
              </option>
            ))}
          </select>
          <p className={classes.errorMessage}></p>
        </div>
        <div>
          <label>Medical License Number:</label>
          <input
            type="text"
            name="medicalLicenseNumber"
            value={formData.medicalLicenseNumber}
            onChange={handleChange}
          />
          <p className={classes.errorMessage}></p>
        </div>
        <div>
          <label>Hospital:</label>
          <input
            type="text"
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
          />
          <p className={classes.errorMessage}></p>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <p className={classes.errorMessage}></p>
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default DoctorSignup;
