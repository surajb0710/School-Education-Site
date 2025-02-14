import { images } from '../../assets/assets.js';

const StudentLearnFeatures = () => {
  return (
    <section className="student-learn-features" id="student-learn-features">
      <div>
        <p>Our Features</p>
        <h1>What Students Learn</h1>
        <p>
          At Little Learners Academy, we strive to cultivate a love for learning
          and equip children with essential skills for their future success. Our
          academic programs cover a wide range of subjects, allowing students to
          develop a strong foundation and discover their interests. Some key
          areas of learning include
        </p>
      </div>
      <div className="student-learn-features-block">
        <div className="feature">
          <div></div>
          <div className="image-container">
            <img src={images.language_arts} alt="" className="object-contain" />
          </div>
          <h2>Language Arts</h2>
          <p>Reading, writing, storytelling, and communication skills.</p>
        </div>
        <div className="feature">
          <div></div>
          <div className="image-container">
            <img src={images.mathematics} alt="" />
          </div>
          <h2>Mathematics</h2>
          <p>Number sense, basic operations, problem-solving, and logic.</p>
        </div>
        <div className="feature">
          <div></div>
          <div className="image-container">
            <img src={images.science} alt="" />
          </div>
          <h2>Science</h2>
          <p>
            Exploring the natural world through hands-on experiments and
            investigations.
          </p>
        </div>
        <div className="feature">
          <div></div>
          <div className="image-container">
            <img src={images.social_studies} alt="" />
          </div>
          <h2>Social Studies</h2>
          <p>
            Cultivating an understanding of diverse cultures and communities.
          </p>
        </div>
        <div className="feature">
          <div></div>
          <div className="image-container">
            <img src={images.arts_crafts} alt="" />
          </div>
          <h2>Arts and Crafts</h2>
          <p>Encouraging creativity through various art forms and crafts.</p>
        </div>
        <div className="feature">
          <div></div>
          <div className="image-container">
            <img src={images.physical_education} alt="" />
          </div>
          <h2>Physical Education</h2>
          <p>Promoting physical fitness, coordination, and teamwork.</p>
        </div>
      </div>
    </section>
  );
};

export default StudentLearnFeatures;
