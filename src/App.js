import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Candy from './Candy';
import Chips from './Chips';
import Juice from './Juice';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<VendingMachine />} />
            <Route path='/candy' element={<Candy />} />
            <Route path='/chips' element={<Chips />} />
            <Route path='/juice' element={<Juice />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
