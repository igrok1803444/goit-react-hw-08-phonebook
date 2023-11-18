import { combineReducers } from '@reduxjs/toolkit';

import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
