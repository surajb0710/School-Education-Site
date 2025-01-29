import { svgs } from '../../assets/assets.js';

const Overview = () => {
  return (
    <section className="overview" id="overview">
      <img
        src={svgs.about_overview_abstract}
        alt=""
        width="137px"
        height="137px"
      />

      <div className="block">
        <p>Overview</p>
        <h1>Welcome to Little Learners Academy</h1>
      </div>
      <p>
        A leading kinder garden school dedicated to providing a nurturing and
        stimulating environment for young learners. With a commitment to
        excellence in early education, we believe in shaping curious minds and
        building a strong foundation for a lifelong love of learning. Our
        holistic approach fosters intellectual, social, emotional, and physical
        development, ensuring that each child reaches their full potential.
      </p>
    </section>
  );
};

export default Overview;
