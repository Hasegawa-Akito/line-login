import './App.css';
import Login from './component/Login';
import CallBack from './component/CallBack';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="callBack" element={<CallBack />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
