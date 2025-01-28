import { svgs } from '../assets/assets.js';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="logo-container-contact-details">
          <div className="logo-container-tagline">
            <img
              src={svgs.logo_laptop}
              alt=""
              width="182.69px"
              height="40px"
              className="logo"
            />
            <p>
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>
          <div className="contact-details">
            <div className="contact-details__email">
              <div>
                <img
                  src={svgs.email}
                  alt=""
                  className="size-6"
                  width="20px"
                  height="20px"
                />
              </div>
              <p>hello@littlelearners.com</p>
            </div>
            <div className="contact-details__phone-number">
              <div>
                <img
                  src={svgs.phone}
                  alt=""
                  className="size-6"
                  width="20px"
                  height="20px"
                />
              </div>
              <p>+91 91813 23 2309</p>
            </div>
            <div className="contact-details__address">
              <div>
                <img
                  src={svgs.location_pin}
                  alt=""
                  className="size-6"
                  width="20px"
                  height="20px"
                />
              </div>

              <p>Somewhere in the World</p>
            </div>
          </div>
        </div>
        <div className="sitemap">
          <div className="sitemap__home">
            <Link to="/">Home</Link>
            <AnchorLink href="#features">Features</AnchorLink>
            <AnchorLink href="#testimonials">Our Testimonials</AnchorLink>
            <AnchorLink href="#faq">FAQ</AnchorLink>
          </div>
          <div className="sitemap__about-us">
            <Link to="/about-us">About Us</Link>
            <a href="">Our Mission</a>
            <a href="">Our Vision</a>
            <a href="">Awards and Recognitions</a>
            <a href="">History</a>
            <a href="">Teachers</a>
          </div>
          <div className="sitemap__academics">
            <Link to="/academics">Academics</Link>
            <a href="">Special Features</a>
            <a href="">Gallery</a>
          </div>
          <div className="sitemap__contact-us">
            <Link to="/contact-us">Contact</Link>
            <a href="">Information</a>
            <a href="">Map & Direction</a>
          </div>
        </div>
      </div>
      <div className="links-social-handles">
        <div className="links">
          <a href="">Terms of Service</a>
          <p>|</p>
          <a href="">Privacy Policy</a>
          <p>|</p>
          <a href="">Cookie Policy</a>
        </div>
        <div className="social-handles">
          <div>
            <img
              src="./assets/facebook.svg"
              alt=""
              width="20px"
              height="20px"
            />
          </div>
          <div>
            <img src="./assets/twitter.svg" alt="" width="20px" height="20px" />
          </div>
          <div>
            <img
              src="./assets/linkedin.svg"
              alt=""
              width="20px"
              height="20px"
            />
          </div>
        </div>
      </div>
      <p className="copyright-text">
        Copyright © [2023] Little Learners Academy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
