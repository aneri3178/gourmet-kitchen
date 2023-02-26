import './App.css';
import {Home} from './Components/Home';
import {Signup} from './Components/Signup'
import {Profile} from './Components/Profile';
import {Login} from './Components/Login';
import {ForgotPassword} from './Components/ForgotPassword';
import {EditProfile} from './Components/EditProfile';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  window.onload = window.localStorage.clear();

  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={<Login/>} />        
            <Route path="/home" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/ForgotPassword" element={<ForgotPassword/>} />
            <Route path="/editProfile" element={<EditProfile/>} />
          </Routes>
        </Router>
    </div>
  );
}
export default App;
