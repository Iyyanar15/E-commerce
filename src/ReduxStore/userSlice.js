import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  token: null,
  name: null,
  firstName: null,
  lastName: null,
  email: null,
  mobile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { userId, token, name, firstName, lastName, email, mobile } =
        action.payload;
      state.userId = userId;
      state.token = token;
      state.name = name;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.mobile = mobile;
    },
    logout: (state) => {
      state.userId = null;
      state.token = null;
      state.name = null;
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.mobile = null;
    },
  },
});

export const { setCredentials, logout } = userSlice.actions;
export default userSlice.reducer;
