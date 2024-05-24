import { configureStore } from '@reduxjs/toolkit';
import SideBarReducer from './sideBarSlice';
import PatientsReducer from './patientsSlice';
import MedicalRecodsReducer from './medicalRecords';
import AuthenticationReducer from './authenticationSlice';

const store = configureStore({
  reducer: {
    auth: AuthenticationReducer,
    nav: SideBarReducer,
    pat: PatientsReducer,
    medicalRecords: MedicalRecodsReducer,
  },
});

export default store;
