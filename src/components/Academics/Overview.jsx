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
        <p>Academics</p>
        <h1>Nurturing Young Minds for Success</h1>
      </div>
      <p>
        {`Welcome to our Academics page, where we take pride in providing a
        comprehensive and stimulating educational experience for your child. Our
        kindergarten school's academic program is thoughtfully designed to
        foster a love for learning while building a strong foundation of
        essential skills and knowledge. From language arts and mathematics to
        science and social studies, our curriculum is carefully crafted to spark
        curiosity and encourage active exploration.`}
      </p>
    </section>
  );
};

export default Overview;
