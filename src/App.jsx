import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Participation from './pages/participation/Participation';
import Achivement from './pages/achivement/Achivement';
import ScrollToTop from './pages/ScrollToTop';
import Gallery from './pages/Gallery/Gallery';
import Sponser from './pages/Sponser/Sponser';
import Media from './components/Media';
import Contact from './pages/Contact/Contact';
import About from './pages/About US/About';
import Team2 from './pages/team/Team2';

const App = () => {
  return (

    <>
      <Router>
        <Media/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourteam" element={<Team2 />} />
          {/* <Route path="/participation" element={<Participation />} /> */}
          <Route path="/achivements" element={<Achivement />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/sponser" element={<Sponser />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
