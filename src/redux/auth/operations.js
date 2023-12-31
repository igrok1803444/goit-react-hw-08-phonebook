import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/signup', userData);
      setToken(data.token);

      return data;
    } catch (error) {
      if (error?.response?.data?.name === 'MongoError') {
        alert('User with this email is already registered!');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/login', userData);
      setToken(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await instance.post('/users/logout');

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  if (token === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
