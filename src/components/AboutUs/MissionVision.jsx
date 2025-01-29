import { svgs } from '../../assets/assets.js';

const MissionVision = () => {
  return (
    <section id="missionVision" className="missionVision">
      <div>
        <p>Mission & Visions</p>
        <h1>Our Mission & Visions</h1>
        <p>
          We are here to provide a nurturing and inclusive environment where
          young minds can thrive, fostering a love for learning and personal
          growth.
        </p>
      </div>
      <div className="missionVision-block">
        <div className="block mission">
          <div>
            <h2>Mission</h2>
            <img src={svgs.about_mission} alt="" />
          </div>
          <p>
            At Little Learners Academy, our mission is to inspire a passion for
            learning and empower young minds to become confident, compassionate,
            and creative individuals. We strive to create a safe and inclusive
            space where children thrive academically, socially, and emotionally,
            setting the stage for a successful educational journey.
          </p>
        </div>
        <div className="block vision">
          <div>
            <h2>Vision</h2>
            <img src={svgs.about_vision} alt="" />
          </div>
          <p>
            Our vision is to be a beacon of educational excellence, where
            children are encouraged to explore, discover, and express their
            unique talents. We aim to foster a generation of lifelong learners
            equipped with critical thinking, empathy, and a deep appreciation
            for diversity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
