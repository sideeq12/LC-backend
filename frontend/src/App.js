import './App.css';
import LandingPage from './components/LandingPage/Landingpage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/first-sign';
import Dashboard from './components/dashboard/Dashboard';
import Verify from './components/verification/verify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TemplateList from './components/templatelist/template';
import NewSkill from './components/newskill/newskill';
import Support from './components/support/support';


function App() {
  return (
    <Router>
 <Routes>
  <Route path="/LC-backend" element={<LandingPage />} />
    <Route path="/login" element={<Login/>} />
     <Route path="/signUp" element={<SignUp /> } />
     <Route path="/dashboard" element={<Dashboard /> } />
     <Route path="/verification" element={<Verify /> } />
     <Route path="/templatelist" element={<TemplateList /> } />
     <Route path="/newskill" element={<NewSkill /> } />
     <Route path="/support" element={<Support />} />
 </Routes>
    </Router>
   
  );
}

export default App;
