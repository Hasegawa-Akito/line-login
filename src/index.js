import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//reduxによる状態保管
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 全てのコンポーネントでstoreを共有可能 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


