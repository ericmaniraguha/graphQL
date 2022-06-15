import './App.css';
import CharactersList from './pages/CharactersList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Character from './pages/Character';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<CharactersList />} />
        <Route path='/:id' element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
