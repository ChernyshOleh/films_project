import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CurrentUser } from "../../types";

export interface UserState {
  user: CurrentUser;
}

const initialState: UserState = {
  user: {
    username: "",
    email: "",
    isAdmin: false,
    token: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<CurrentUser>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
