import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {},
  currentPage : 0,
};

const formSlice = createSlice({
   name : 'form',
   initialState, 
   reducers: {
      nextPage : (state) => {
         state.currentPage += 1;
      },
      previousPage : (state) => {
         state.currentPage -= 1;
      },
      saveFormData : (state, action) => {
         state.formData = {...state.formData, ...action.payload};
         console.log(state.formData);
      },
      goTo : (state, action) => {
         state.currentPage = action.payload;
      }

   }
})

export const { nextPage, previousPage, saveFormData, goTo } = formSlice.actions;

export default formSlice.reducer;