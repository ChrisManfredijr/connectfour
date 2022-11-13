import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu';
import Game from './pages/Game';
function App() {
  return (
    <div className="App">        
        <Router>
          <Routes>
            <Route path='/' element={<Menu/>}/>
            <Route path='/game' element={<Game/>}/>
          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
