import liff from '@line/liff';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

function Login() {
    useEffect(()=>{
        initLiff()// 初期化処理
    }, [])

    const initLiff = () => {
        liff.init({ liffId: ""})
            .then(()=>{ 
                //ログインしていなければログインさせる
                if(liff.isLoggedIn() === false) liff.login({})
            }).catch( (error)=> {});
    }

    return (
        <div>
        aaa
        </div>
    );
}

export default Login;
