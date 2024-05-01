import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMedicalRecords } from '../../../redux/medicalRecords';
import { useParams } from 'react-router-dom';
import MedicalRecordsListItem from './MedicalRecordsListItem';

const MedicalRecordsList = () => {
  const dispatch = useDispatch();
  const medicalRecords = useSelector(
    (state) => state.medicalRecords.patientMedicalRecords
  );

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMedicalRecords(id));
  }, [dispatch, id]);

  console.log(id);
  console.log(medicalRecords);

  return (
    <ul>
      <h4>List of Medical Records</h4>
      {medicalRecords.map((medicalRecord) => (
        <li key={medicalRecord._id}>
          <MedicalRecordsListItem medicalRecord={medicalRecord} />
        </li>
      ))}
    </ul>
  );
};

export default MedicalRecordsList;
