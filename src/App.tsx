import {LoginForm} from './components/Login/LoginForm/LoginForm';
import {ForgotPass} from './components/Login/ForgotPass/ForgotPass';
import {ResetPass} from './components/Login/ResetPass/ResetPass';
import {Login1} from './components/Login/Login1/Login1';
import {LoginError} from './components/Login/LoginError/LoginError';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Menubar from './components/Dashboard/MenuBar/MenuBar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserInfor from './components/Dashboard/UserInformation/UserInfor';
import DashboardCenter from './components/Dashboard/DashboardCenter/DashboardCenter';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/forgot" element={<ForgotPass/>} />
          <Route path="/reset" element={<ResetPass/>} />
          <Route path="/login1" element={<Login1/>} />
          <Route path="/loginerror" element={<LoginError/>} />
          <Route path="/dashboard" element={<><Menubar/><Dashboard/></>} />
          <Route path="/user" element={<><Dashboard/><UserInfor/></>} />
          <Route path="/center" element={<DashboardCenter/>} />
        </Routes>
    </div>
    </BrowserRouter> 
  );
}

export default App;
