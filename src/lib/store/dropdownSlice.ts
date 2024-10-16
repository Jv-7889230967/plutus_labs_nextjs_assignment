// src/store/dropdownSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DropdownState {
  category: string;
  yearRange: string;
  selectedYear: string;
}

const initialState: DropdownState = {
  category: '',    // Tracks the first dropdown
  yearRange: '',   // Tracks the second dropdown
  selectedYear: '', // Tracks the third dropdown
};

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setYearRange: (state, action: PayloadAction<string>) => {
      state.yearRange = action.payload;
    },
    setSelectedYear: (state, action: PayloadAction<string>) => {
      state.selectedYear = action.payload;
    },
  },
});

export const { setCategory, setYearRange, setSelectedYear } = dropdownSlice.actions;
export default dropdownSlice.reducer;
