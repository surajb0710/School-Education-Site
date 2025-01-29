import { svgs } from '../../assets/assets.js';

const Overview = () => {
  return (
    <section className="admission-overview" id="overview">
      <img
        src={svgs.about_overview_abstract}
        alt=""
        width="137px"
        height="137px"
      />

      <div className="block">
        <p>Admission</p>
        <h1>Join Our Family of Young Learners</h1>
      </div>
      <p>
        {`At Little Learners Academy, we welcome you to embark on an exciting
        educational journey for your child. Our admission process is designed to
        be transparent, straightforward, and inclusive. Here's a step-by-step
        guide to joining our school`}
      </p>
    </section>
  );
};

export default Overview;
