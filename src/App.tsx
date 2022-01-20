
import {LoginForm} from './components/Login/LoginForm/LoginForm';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Routes>
          <Route path="/login" element={<LoginForm/>} />
        </Routes>
    </div>
    </BrowserRouter> 
  );
}

export default App;
