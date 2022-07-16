import { useLocation } from 'react-router-dom';

function CallBack() {
    const search = useLocation().search;
    const query = new URLSearchParams(search);
    console.log(query.get('code'));
    
    return (
        <div>
        ログイン後の遷移ページ

        </div>
        
    )
}

export default CallBack;
