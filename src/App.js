import { Routes, Route } from 'react-router-dom';
import './index.css';

import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Projects /> } />
      <Route pate='/about' element={ <About /> } />
    </Routes>
  );
}

export default App;
