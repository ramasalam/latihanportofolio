import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Interest from './pages/Interest'
import Awards from './pages/Awards'

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
    </div>
  );
}

export default App;
