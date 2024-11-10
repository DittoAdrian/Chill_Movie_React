import { createSlice } from "@reduxjs/toolkit";

// SLICE REDUCER
const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("user")) || { id: null },
  reducers: {
    updateUser: (state, action) => {
      state.id = action.payload.id; 
      
      localStorage.setItem("user", JSON.stringify(state));
    }
  }
});

export const {updateUser} = userSlice.actions;
export default userSlice.reducer;