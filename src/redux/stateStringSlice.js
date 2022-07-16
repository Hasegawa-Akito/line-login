import { createSlice } from "@reduxjs/toolkit";

export const stateStringSlice = createSlice({
    name: "loginState",
    initialState: {
        value: null,
    },
    reducers: {
        setState: (state, action) => {
            state.value = action.payload; //値を任意にセット
        },
        
    }
});

//コンポーネントでも作成したアクションを使用できるように
export const { setState } = stateStringSlice.actions;
export default stateStringSlice.reducer;