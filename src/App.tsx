import {useEffect,useState} from 'react'
import {LoginForm} from './components/Login/LoginForm/LoginForm';
import {ForgotPass} from './components/Login/ForgotPass/ForgotPass';
import {ResetPass} from './components/Login/ResetPass/ResetPass';
import {Login1} from './components/Login/Login1/Login1';
import {LoginError} from './components/Login/LoginError/LoginError';
import Menubar from './components/Dashboard/MenuBar/MenuBar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserInfor from './components/Dashboard/UserInformation/UserInfor';
import Equipment from './components/Dashboard/Equipment/Equipment';
import SlideBar from './components/Dashboard/SlideBar/SlideBar';
import DashBoard from './components/Dashboard/DashBoard/DashBoard';
import AddEquipment from './components/Dashboard/AddEquipment/AddEquipment';
import DetailEquipment from './components/Dashboard/DetailEquipment/DetailEquipment';
import RoleManagement from './components/Dashboard/RoleManagement/RoleManagement';
import Service from './components/Dashboard/Service/Service';
import UpdateEquipment from './components/Dashboard/UpdateEquipment/UpdateEquipment';
import DetailService from './components/Dashboard/DetailService/DetailService';
import AddService from './components/Dashboard/AddService/AddService';
import UpdateService from './components/Dashboard/UpdateService/UpdateService';
import Number from './components/Dashboard/Number/Number';
import DetailNumber from './components/Dashboard/DetailNumber/DetailNumber';
import AddNumber from './components/Dashboard/AddNumber/AddNumber';
import Report from './components/Dashboard/Report/Report';
import AddRoleManageMent from './components/Dashboard/AddRoleManagement/AddRoleManagement';

function App() {
  const [dataChild , setDataChild] = useState('')

  const callbackFunction = (childData: any) => {
      setDataChild(childData);
  }
 const [messageNumberLevel, setMessageNumberLevel] = useState('')

 const MessageFromNumberLevel = (childData: any) =>{
    setMessageNumberLevel(childData)
    
 }

  return (
    <BrowserRouter>
    <div className="App">
       <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/forgot" element={<ForgotPass/>} />
          <Route path="/reset" element={<ResetPass/>} />
          <Route path="/login1" element={<Login1/>} />
          <Route path="/loginerror" element={<LoginError/>} />
          <Route path="/dashboard" element={<><SlideBar/><DashBoard /><Menubar/></>} />
          <Route path="/user" element={<><SlideBar/><UserInfor/></>} />
          <Route path="/equipment" element={<><SlideBar/><Equipment/></>} />
          <Route path="/equipment/addequipment" element={<><SlideBar /><AddEquipment/></>}></Route>
          <Route  path={'/equipment/detail' } element={<><SlideBar /><DetailEquipment/></>}></Route>
          <Route  path={'/equipment/detail/updateequipment' } element={<><SlideBar /><UpdateEquipment/></>}></Route>
          <Route  path={'/service' } element={<><SlideBar /><Service /></>}></Route>
          <Route  path={'/service/addservice' } element={<><SlideBar /><AddService /></>}></Route>
          <Route  path={'/service/detailservice' } element={<><SlideBar /><DetailService /></>}></Route>
          <Route  path={'/service/detailservice/updateservice' } element={<><SlideBar /><UpdateService /></>}></Route>
          <Route  path={'/number' } element={<><SlideBar /><Number parentCallbackNL={MessageFromNumberLevel}/></>}></Route>
          <Route  path={'/number/detailnumber' } element={<><SlideBar /><DetailNumber value={messageNumberLevel}/></>}></Route>
          <Route  path={'/number/addnumber' } element={<><SlideBar /><AddNumber/></>}></Route>
          <Route  path={'/report' } element={<><SlideBar /><Report /></>}></Route>
          <Route  path={'/rolemanagement' } element={<><SlideBar /><RoleManagement parentCallback={callbackFunction} /></>}></Route>
          <Route  path={'/rolemanagement/addrole' } element={<><SlideBar /><AddRoleManageMent /></>}></Route>
        </Routes>
    </div>
    </BrowserRouter> 
  );
}

export default App;
