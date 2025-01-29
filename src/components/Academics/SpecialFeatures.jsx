import { svgs } from '../../assets/assets.js';

const SpecialFeatures = () => {
  return (
    <section className="special-features">
      <div>
        <p>Our Features</p>
        <h1>Our Special Features</h1>
        <p>
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
      </div>
      <div className="special-features-block">
        <div className="feature">
          <img src={svgs.book} alt="" />
          <h2>Thematic Learning</h2>
          <p>
            {`Our curriculum is centered around engaging themes that capture
            children's imaginations. Each theme integrates multiple subjects,
            making learning enjoyable and relevant.`}
          </p>
        </div>
        <div className="feature">
          <img src={svgs.bar_chart} alt="" />
          <h2>STEAM Education</h2>
          <p>
            We offer innovative STEAM (Science, Technology, Engineering, Arts,
            and Mathematics) programs that promote hands-on exploration,
            critical thinking, and problem-solving skills.
          </p>
        </div>
        <div className="feature">
          <img src={svgs.puzzle_piece} alt="" />
          <h2>Language Immersion</h2>
          <p>
            Through language immersion programs, children have the opportunity
            to learn a second language, enhancing cognitive development and
            global awareness.
          </p>
        </div>
        <div className="feature">
          <img src={svgs.paint_brush} alt="" />
          <h2>Art and Creativity</h2>
          <p>
            Art is celebrated at Little Learners Academy. Our art-focused
            activities encourage self-expression, creativity, and the
            appreciation of various art forms.
          </p>
        </div>
        <div className="feature">
          <img src={svgs.sun} alt="" />
          <h2>Outdoor Education</h2>
          <p>
            Our expansive outdoor learning spaces provide a stimulating
            environment for children to explore nature, fostering a connection
            with the environment.
          </p>
        </div>
        <div className="feature">
          <img src={svgs.star} alt="" />
          <h2>Play-Based Learning</h2>
          <p>
            Play is an integral part of early childhood education. Our
            play-based approach enhances social skills, emotional development,
            and imaginative thinking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
