import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './welcomeScreens/Welcome';
import Rules from './welcomeScreens/Rules';
import Application from './welcomeScreens/Application';
import Candidate from './welcomeScreens/Candidate';
import Sportradar from './welcomeScreens/Sportradar';
import Wordle from './Wordle/Wordle';
import Finale from './Wordle/Finale';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/application" element={<Application />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/sportradar" element={<Sportradar />} />
          <Route path="/Wordle" element={<Wordle />} />
          <Route path="/Finale" element={<Finale />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
