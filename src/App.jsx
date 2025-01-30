import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import StudentLife from './pages/StudentLife';
import Header from './components/Header';
import TermsOfService from './pages/TermsOfService';

import './css/style.css';
import Footer from './components/Footer';
import Admission from './pages/Admission';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/students-life" element={<StudentLife />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/termsOfservice" element={<TermsOfService />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/cookiespolicy" element={<CookiesPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
