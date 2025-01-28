import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Home from './pages/Home';
import Contact from './pages/Contact';
import StudentLife from './pages/StudentLife';
import Header from './components/Header';

import './css/style.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/studentlife" element={<StudentLife />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
