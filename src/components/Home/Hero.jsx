import { svgs } from '../../assets/assets.js';

const Hero = () => {
  return (
    <section className="hero">
      <img src={svgs.hero_image} alt="" width="615px" height="663px" />

      <div className="hero__container">
        <div>
          <p>Welcome to Little Learners Academy</p>
          <hr />
        </div>

        <h1>
          Where Young Minds Blossom and <span>Dreams Take Flight.</span>
        </h1>
        <p>
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
        <div className="achivements-container">
          <div className="achivement">
            <p>+7000</p>
            <p>Students Passed Out</p>
          </div>
          <hr />
          <div className="achivement">
            <p>+37</p>
            <p>Awards & Recognitions</p>
          </div>
          <hr />
          <div className="achivement">
            <p>+15</p>
            <p>Experience Educators</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
