import { useDispatch } from "react-redux";
import { setState } from "../redux/stateStringSlice";


function Login() {
    
    const dispatch = useDispatch();

    function handleClick() {
        //line認証URL
        const line_loginURL = "https://access.line.me/oauth2/v2.1/authorize?response_type=code";

        //ランダムにstateの文字列を作成
        const state_random = Math.random().toString(32).substring(2);
        dispatch(setState(state_random)); //stateの値をstoreに保存

        //line認証画面へリダレクト
        window.location.href = line_loginURL + 
                               "&client_id=" + process.env.REACT_APP_CLIENT_ID +
                               "&redirect_uri=" + process.env.REACT_APP_REDIRECT_URI +
                               "&state=" + state_random +
                               "&scope=" + process.env.REACT_APP_SCOPE +
                               "&nonce=" + process.env.REACT_APP_NONCE;
    }
    
    return (
        <button onClick={handleClick}>login</button>
    )
}

export default Login;
