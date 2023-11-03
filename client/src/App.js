
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Register from './pages/register';
import Login from './pages/login';
import HomeScreen from './pages/homeScreen';
import Dashboard from './pages/dashboard';
import Users from './pages/users';

import Frgetpwd from './pages/forgetpwd';
import Resetpwd from './pages/resetpwd';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
    
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/nav" element={<navBar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />

          <Route path="/login/forget-password" element={<Frgetpwd />} />

          <Route path="/login/forget-password/reset-password" element={<Resetpwd />} />



        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
