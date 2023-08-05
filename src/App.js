import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Autentication from './pages/Autentication/Autentication';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './components/login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Autentication/>} exact />
        <Route path='/dashboard' element={<Dashboard/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
