import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { login, logout } from '../redux/loginSlice';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function CallBack() {
    //URLについているqueryを取得
    const search = useLocation().search;
    const query = new URLSearchParams(search);

    const state_store = useSelector((state) => state.loginState.value); //storeの値を取得

    const [loginStatus, setLoginStatus] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        
        const state_query = query.get('state'); //queryのstateを取得

        // ログイン認証時ランダムで生成したstateとコールバックで変えてきたURL上のstateと同じになっているかどうか
        if (state_query === state_store) {
            dispatch(login());
            setLoginStatus(true);
        }
        else {
            dispatch(logout());
            setLoginStatus(false);
        }
    
    },[]);

    
    //ログイン成功時の遷移先
    if (loginStatus) {
        return (
            <div>
            ログイン成功
            </div>
            
        )
    } 
    // ログイン失敗時の遷移先
    else {
        return (
            <div>
            ログイン失敗
            <Link to="/">loginページ</Link>
            </div>
            
        )
    }
    
}

export default CallBack;
