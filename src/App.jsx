import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import OurMember from './pages/OurMember';
import Contact from "./pages/Contact"
import ShadiMubark from './pages/ShadiMubark'
import FoodAid from './pages/FoodAid';


const App = () => {
  return (
    <> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ShadiMubark" element={<ShadiMubark />} />
          <Route path="/FoodAid" element={<FoodAid />} />
          <Route path="/OurMember" element={<OurMember />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

    </>
  );
}

export default App;