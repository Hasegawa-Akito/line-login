LINE LOGIN認証方法 (フロントエンドのみ)  //セキュリティ低め、、、
1. ログインボタンクリック
2. (例)https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%3Fkey%3Dvalue&state=12345abcde&scope=profile%20openid&nonce=09876xyz (lineログイン認証画面)にリダイレクト
stateの値をランダムに設定しreduxでローカルに保持
3. lineによるlogin認証
4. 認証成功時にコールバックURLの画面へ遷移
5. URLにあるqueryのstateの値と2で保持したローカルのstateを比較
6. 5の結果がtrueならログイン成功画面へ, falseなら失敗画面へ