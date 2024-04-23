import React, { useState } from 'react';
import classes from './AddPatience.module.css';

const AddPatientForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    allergies: '',
    medicalConditions: '',
    familyMedicalHistory: '',
    surgicalHistory: '',
    medications: '',
    immunizations: '',
    insuranceProvider: '',
    policyNumber: '',
    groupNumber: '',
    primaryCarePhysician: '',
    emergencyContactName: '',
    emergencyContactRelationship: '',
    emergencyContactPhoneNumber: '',
    preferredLanguage: '',
    ethnicity: '',
    occupation: '',
    lifestyleFactors: '',
    religiousOrCulturalConsiderations: '',
    consentForTreatment: false,
    privacyPolicyAcknowledgment: false,
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.add_patient_form}>
      <div className={classes.personal_details}>
        <h2>Personal Details</h2>
        <div className={classes.personal_details_inputs}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </label>

          <label>
            Date of Birth:
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </label>

          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>

          <label>
            Email Address:
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </label>

          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className={classes.personal_details}>
        <h2>Next of Keen Details</h2>
        <div className={classes.personal_details_inputs}>
          <label>
            Next of keen:
            <input
              type="text"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleChange}
            />
          </label>

          <label>
            Relationship:
            <input
              type="text"
              name="emergencyContactRelationship"
              value={formData.emergencyContactRelationship}
              onChange={handleChange}
            />
          </label>

          <label>
            Emergency Contact Phone Number:
            <input
              type="tel"
              name="emergencyContactPhoneNumber"
              value={formData.emergencyContactPhoneNumber}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className={classes.personal_details}>
        <h2>Healthy Details</h2>
        <div className={classes.personal_details_inputs}>
          <label>
            Allergies:
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
            />
          </label>

          <label>
            Medical Conditions:
            <input
              type="text"
              name="medicalConditions"
              value={formData.medicalConditions}
              onChange={handleChange}
            />
          </label>

          <label>
            Family Medical History:
            <input
              type="text"
              name="familyMedicalHistory"
              value={formData.familyMedicalHistory}
              onChange={handleChange}
            />
          </label>

          <label>
            Surgical History:
            <input
              type="text"
              name="surgicalHistory"
              value={formData.surgicalHistory}
              onChange={handleChange}
            />
          </label>

          <label>
            Medications:
            <input
              type="text"
              name="medications"
              value={formData.medications}
              onChange={handleChange}
            />
          </label>

          <label>
            Immunizations:
            <input
              type="text"
              name="immunizations"
              value={formData.immunizations}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className={classes.personal_details}>
        <h2>Policy Information</h2>
        <div className={classes.personal_details_inputs}>
          <label>
            Insurance Provider:
            <input
              type="text"
              name="insuranceProvider"
              value={formData.insuranceProvider}
              onChange={handleChange}
            />
          </label>

          <label>
            Policy Number:
            <input
              type="text"
              name="policyNumber"
              value={formData.policyNumber}
              onChange={handleChange}
            />
          </label>

          <label>
            Group Number:
            <input
              type="text"
              name="groupNumber"
              value={formData.groupNumber}
              onChange={handleChange}
            />
          </label>

          <label>
            Primary Care Physician:
            <input
              type="text"
              name="primaryCarePhysician"
              value={formData.primaryCarePhysician}
              onChange={handleChange}
            />
          </label>
          <label>
            Additional Notes:
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPatientForm;
