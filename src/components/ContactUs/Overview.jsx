import { svgs } from '../../assets/assets.js';

const Overview = () => {
  return (
    <section className="contact-us-overview" id="overview">
      <img
        src={svgs.about_overview_abstract}
        alt=""
        width="137px"
        height="137px"
      />
      <div className="block-left">
        <p>Contact Us</p>
        <h1>Feel Free To Connect With Us</h1>
      </div>
      <div className="block-right">
        <p>
          We value open communication and are eager to assist you with any
          inquiries. Feel free to reach out to us through any of the following
          contact methods
        </p>
        <div>
          <a href="mailto:hello@littlelearners.com">
            <img src={svgs.email} alt="" />
          </a>
          <p>hello@littlelearners.com</p>
        </div>
        <div>
          <img src={svgs.phone} alt="" />
          <p>+1 123456789</p>
        </div>
        <div>
          <img src={svgs.location_pin} alt="" />
          <p>Somewhere in the World</p>
        </div>
        <div>
          <img src={svgs.clock} alt="" />
          <p>Office Hours - 9am - 6 pm</p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
