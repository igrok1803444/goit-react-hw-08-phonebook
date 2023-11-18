import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://654f6e3d358230d8f0cd4c62.mockapi.io/contacts/contacts'
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',

  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://654f6e3d358230d8f0cd4c62.mockapi.io/contacts/contacts',
        contact
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://654f6e3d358230d8f0cd4c62.mockapi.io/contacts/contacts/${contactID}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
