import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  status: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
