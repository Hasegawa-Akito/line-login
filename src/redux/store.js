import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import stateStringReducer from "./stateStringSlice";
import { save, load } from 'redux-localstorage-simple';//storeをローカルに保存


export const store = configureStore({
    reducer: {
        loginStatus: loginReducer, //ログイン状態を保持
        loginState: stateStringReducer, //ログイン時に生成するstateの保持
    },
    //ローカルにstoreを保存し、ページリロード時にも値を保持
    preloadedState: load(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
});