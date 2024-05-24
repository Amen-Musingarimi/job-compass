import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  token: '',
  user: {},
  isLoading: false,
  errors: null,
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userInput, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/users',
        userInput
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        return thunkAPI.rejectWithValue('Username must be unique');
      }
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      });
  },
});

export default authSlice.reducer;
