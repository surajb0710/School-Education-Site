import { svgs } from '../assets/assets.js';
import { HashLink } from 'react-router-hash-link';

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
                <img src={svgs.email} alt="" />
              </div>
              <p>hello@littlelearners.com</p>
            </div>
            <div className="contact-details__phone-number">
              <div>
                <img src={svgs.phone} alt="" />
              </div>
              <p>+91 91813 23 2309</p>
            </div>
            <div className="contact-details__address">
              <div>
                <img src={svgs.location_pin} alt="" />
              </div>

              <p>Somewhere in the World</p>
            </div>
          </div>
        </div>
        <div className="sitemap">
          <div className="sitemap__home">
            <HashLink smooth to="/#top-anchor">
              Home
            </HashLink>
            <HashLink smooth to="/#features">
              Features
            </HashLink>
            <HashLink smooth to="/#testimonials">
              Our Testimonials
            </HashLink>
            <HashLink smooth to="/#faq">
              FAQ
            </HashLink>
          </div>
          <div className="sitemap__about-us">
            <HashLink smooth to="/about-us#top-anchor">
              About Us
            </HashLink>
            <HashLink smooth to="/about-us#missionVision">
              Our Mission
            </HashLink>
            <HashLink smooth to="/about-us#missionVision">
              Our Vision
            </HashLink>
            <HashLink smooth to="/about-us#awards-recognitions">
              Awards and Recognitions
            </HashLink>
            <HashLink smooth to="/about-us#history">
              History
            </HashLink>
            <HashLink smooth to="/about-us#team">
              Teachers
            </HashLink>
          </div>
          <div className="sitemap__academics">
            <HashLink smooth to="/academics#top-anchor">
              Academics
            </HashLink>
            <HashLink smooth to="/academics#special-features">
              Special Features
            </HashLink>
            <HashLink smooth to="/academics#gallery">
              Gallery
            </HashLink>
          </div>
          <div className="sitemap__contact-us">
            <HashLink smooth to="/contact-us#top-anchor">
              Contact
            </HashLink>
            <HashLink smooth to="/contact-us#contact-us">
              Information
            </HashLink>
          </div>
        </div>
      </div>
      <div className="links-social-handles">
        <div className="links">
          <HashLink smooth to="/termsOfService#top-anchor">
            Terms of Service
          </HashLink>
          <p>|</p>
          <HashLink smooth to="/privacypolicy#top-anchor">
            Privacy Policy
          </HashLink>
          <p>|</p>
          <HashLink smooth to="/cookiespolicy#top-anchor">
            Cookie Policy
          </HashLink>
        </div>
        <div className="social-handles">
          <div>
            <img src={svgs.facebook} alt="" width="20px" height="20px" />
          </div>
          <div>
            <img src={svgs.twitter} alt="" width="20px" height="20px" />
          </div>
          <div>
            <img src={svgs.linkedin} alt="" width="20px" height="20px" />
          </div>
        </div>
      </div>
      <p className="copyright-text">
        Copyright © [2025] Little Learners Academy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
