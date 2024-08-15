import Navbar from './components/navbar/Navbar.jsx';
import Astros from './components/astros/Astros.jsx';
import About from './components/about/About.jsx';
import APOD from './components/apod/Apod.jsx';

import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
    const links = [
        { id: 1, href: "/", text: "Home" },
        {id: 4, href: "/about", text: "About"},
        { id: 2, href: "/astros", text: "Astros" },
        { id: 3, href: "/apod", text: "APOD" },
      ];

  return (
    <>
      <Navbar links={links} />
      <Routes>
        <Route path="/" element ={<h1>Space-app</h1>} />
        <Route path="/astros" element={<Astros/>} />
        <Route path="/about" element={<About />} />
        <Route path="/apod" element={<APOD />} />
        
        
        
      </Routes>
    </>
  );
}

export default App;
