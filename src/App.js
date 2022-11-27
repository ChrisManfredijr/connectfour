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
            <Route path='/' element={<Menu/>}/>
            <Route path='/game' element={<Game/>}/>
            <Route path='/rules' element={<Rules/>}/>
          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
