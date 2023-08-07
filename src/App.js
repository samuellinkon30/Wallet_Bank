import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Autentication from './pages/Autentication/Autentication';
import Dashboard from './pages/Dashboard/Dashboard';
import Cryptocoin from './pages/Cryptocoin/Cryptocoin';
import Transaction from './pages/Transaction/Transaction';
import Transfer from './pages/Transfer/Transfer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Autentication/>} exact />
        <Route path='/cryptocoin' element={<Cryptocoin/>} exact />
        <Route path='/dashboard' element={<Dashboard/>} exact />
        <Route path='/transaction' element={<Transaction/>} exact />
        <Route path='/transfer' element={<Transfer/>} exact />
      </Routes>
    </Router>

 
  );
}

export default App;
