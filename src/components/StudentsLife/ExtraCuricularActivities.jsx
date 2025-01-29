import { svgs } from '../../assets/assets';

const ExtraCuricularActivities = () => {
  return (
    <section className="extracurricular-activities">
      <div>
        <p>Our Features</p>
        <h1>Extracurricular Activities</h1>
        <p>
          At Little Learners Academy, we believe in nurturing well-rounded
          individuals. Our extracurricular activities offer a diverse range of
          experiences that complement our academic curriculum and encourage
          students to explore their interests and passions. We offer a wide
          array of extracurricular activities, including
        </p>
      </div>
      <div className="extracurricular-activities-block">
        <div className="activity">
          <img src={svgs.zig_zag} alt="" />
          <h2>Sports and Athletics</h2>
          <p>
            Students can participate in various sports, from soccer and
            basketball to gymnastics and yoga. Sports help promote teamwork,
            physical fitness, and a sense of discipline.
          </p>
        </div>
        <div className="activity">
          <img src={svgs.paint_brush} alt="" />
          <h2>Art and Creativity</h2>
          <p>
            Our art classNamees and creative workshops provide a platform for
            students to express their creativity through painting, drawing, and
            other artistic forms.
          </p>
        </div>
        <div className="activity">
          <img src={svgs.music_node} alt="" />
          <h2>Music and Performing Arts</h2>
          <p>
            Students can discover their musical talents through singing, playing
            musical instruments, and participating in drama and theater
            performances.
          </p>
        </div>
        <div className="activity">
          <img src={svgs.puzzle_piece} alt="" />
          <h2>Language Clubs</h2>
          <p>
            Language clubs offer an opportunity for students to immerse
            themselves in different languages and cultures, fostering global
            awareness.
          </p>
        </div>
        <div className="activity">
          <img src={svgs.lab_flask} alt="" />
          <h2>Science Club</h2>
          <p>
            The science club allows young scientists to explore the wonders of
            science through fun experiments and hands-on learning.
          </p>
        </div>
        <div className="activity">
          <img src={svgs.tiny_stars} alt="" />
          <h2>Cooking and Culinary Arts</h2>
          <p>
            Cooking classNamees introduce students to the joys of preparing and
            tasting delicious and healthy meals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExtraCuricularActivities;
