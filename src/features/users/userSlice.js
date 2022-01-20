import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "UserCredentialImpl",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setSignOutState: (state) => {
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserEmail = (state) => state.UserCredentialImpl.email;
export const selectUserPhoto = (state) => state.useUserCredentialImpl.photo;

export default userSlice.reducer;
