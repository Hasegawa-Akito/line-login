import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "loginStatus",
    initialState: {
        value: false,
    },
    reducers: {
        login: (state) => {
            state.value = true;
        },
        logout: (state) => {
            state.value = false;
        },
    }
});

//コンポーネントでも作成したアクションを使用できるように
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;