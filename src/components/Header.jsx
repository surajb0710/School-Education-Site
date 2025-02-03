import { svgs } from '../assets/assets.js';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div id="top-anchor"></div>
      <header className="header">
        <div className="top-banner" id="top-banner">
          <img
            src={svgs.abstract_design_01}
            alt=""
            width="180px"
            height="180px"
            className="abstract-design left"
          />
          <img
            src={svgs.abstract_sphere}
            alt=""
            className="large-sphere"
            width="72.35px"
            height="72.41px"
          />

          <p className="top-banner__text">
            Admission is Open, Grab your seat now
            <img
              src={svgs.right_arrow}
              alt=""
              className="size-6"
              width="24px"
              height="24px"
            />
          </p>
          <img
            src={svgs.abstract_sphere}
            alt=""
            className="small-sphere"
            width="39.56px"
            height="39.59px"
          />
          <img
            src={svgs.abstract_design_01}
            alt=""
            width="180px"
            height="180px"
            className="abstract-design right"
          />
        </div>
        <nav className="navbar" id="navbar">
          <div className="logo-container">
            <Link to="/">
              <img
                src={svgs.logo_laptop}
                alt=""
                width="155.29px"
                height="34px"
                className="logo"
              />
            </Link>
          </div>

          <div className="navbar__links">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/academics">Academics</Link>
            <Link to="/admissions">Admissions</Link>
            <Link to="/students-life">Student Life</Link>
            <Link to="/contact-us">Contact</Link>
          </div>
          <div className="hamburger-container">
            <img src={svgs.hamburger} alt="" className="hamburger" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
