import { createSlice } from "@reduxjs/toolkit";

const initialState = { userData: { token: "" } };

const { actions, reducer: userReducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserToken(state, action) {
      console.log({ action });
      state.userData.token = action.payload.token as string;
    },
  },
});
export const { saveUserToken } = actions;

export default userReducer;
