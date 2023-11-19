import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, register } from './operations';

const authInitialState = {
  userData: {
    email: null,
    name: null,
  },
  token: null,
  isLoggedin: false,
  isLoading: false,
  isRefresh: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedin = true;
        state.isLoading = false;
      })
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(login.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedin = true;
        state.isLoading = false;
      })
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleRejected)
      .addCase(logout.fulfilled, () => {
        return authInitialState;
      })
      .addCase(logout.pending, handlePending)
      .addCase(logout.rejected, handleRejected)
      .addCase(refresh.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isLoggedin = true;
        state.isLoading = false;
      })
      .addCase(refresh.pending, handlePending)
      .addCase(refresh.rejected, handleRejected),
});
export const authReducer = authSlice.reducer;
