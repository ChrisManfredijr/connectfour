import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu';
import Game from './pages/Game';
import Rules from './pages/Rules';
function App() {
  return (
    <div className="App">        
        <Router>
          <Routes>
            <Route path='/connectfour/' element={<Menu/>}/>
            <Route path='/connectfour/game' element={<Game/>}/>
            <Route path='/connectfour/rules' element={<Rules/>}/>
          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
