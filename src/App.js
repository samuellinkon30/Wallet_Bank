import './App.css';
import { BrowserRouter as Router, Routes, Route, Swtich } from 'react-router-dom';
import Autentication from './pages/Autentication/Autentication';
import Dashboard from './pages/Dashboard/Dashboard';

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
