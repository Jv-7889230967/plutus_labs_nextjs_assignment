import { configureStore } from '@reduxjs/toolkit';
import featureReducer from './featureSlice'; // Import your slice
import dropdownReducer from './dropdownSlice';

const store = configureStore({
  reducer: {
    yourSlice: featureReducer, // Add your slice reducer here
    dropdown: dropdownReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
