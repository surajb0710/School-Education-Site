import { svgs } from '../../assets/assets.js';

const Team = () => {
  return (
    <section className="team">
      <div>
        <p>Our Teachers With Experties</p>
        <h1>Our Team Members</h1>
        <p>
          At Little Learners Academy, our teaching team is the heart of our
          educational journey. We take great pride in employing highly qualified
          and passionate educators who possess a deep understanding of early
          childhood development. Our teachers create a warm and engaging
          atmosphere, encouraging curiosity, instilling confidence, and
          fostering a love for learning.
        </p>
      </div>
      <div className="team-block">
        <div className="educator-profile">
          <img
            className="educator__display-picture"
            src={svgs.sarah_anderson}
            alt=""
          />
          <h2 className="educator__name">Ms. Sarah Anderson</h2>
          <img className="email-icon" src="./assets/email.svg" alt="" />
          <div className="educator-qualification">
            <h3>
              {`Qualification:Bachelor's Degree in Early Childhood Education`}
            </h3>
            <p>
              Ms. Sarah is a passionate educator with over 10 years of
              experience in guiding young minds. Her warm and nurturing approach
              creates a welcoming classNameroom environment where children feel
              comfortable to explore and learn.
            </p>
          </div>
        </div>
        <div className="educator-profile">
          <img
            className="educator__display-picture"
            src={svgs.david_roberts}
            alt=""
          />
          <h2 className="educator__name">Mr. David Roberts</h2>
          <img src="./assets/email.svg" alt="" />
          <div className="educator-qualification">
            <h3>{`Qualification: Master's Degree in Elementary Education`}</h3>
            <p>
              With a strong background in elementary education, Mr. David brings
              a creative and interactive teaching style to his classNameroom.
              His enthusiasm for learning inspires students to ask questions and
              think critically.
            </p>
          </div>
        </div>
        <div className="educator-profile">
          <img
            className="educator__display-picture"
            src={svgs.emily_harnandez}
            alt=""
          />
          <h2 className="educator__name">Ms. Emily Hernandez</h2>
          <img src="./assets/email.svg" alt="" />
          <div className="educator-qualification">
            <h3>Qualification: Diploma in Child Psychology</h3>
            <p>
              {`Ms. Emily's expertise in child psychology enables her to
              understand each child's unique needs and provide individualized
              support. Her caring nature fosters a strong sense of belonging and
              confidence in her students.`}
            </p>
          </div>
        </div>
        <div className="educator-profile">
          <img
            className="educator__display-picture"
            src={svgs.michael_turner}
            alt=""
          />
          <h2 className="educator__name">Mr. Michael Turner</h2>
          <img src="./assets/email.svg" alt="" />
          <div className="educator-qualification">
            <h3>{`Qualification: Bachelor's Degree in Physical Education`}</h3>
            <p>
              {`Mr. Michael's passion for physical fitness and sports shines
              through in his energetic classNamees. He encourages students to
              stay active, promoting teamwork and a healthy lifestyle.`}
            </p>
          </div>
        </div>
        <div className="educator-profile">
          <img
            className="educator__display-picture"
            src={svgs.jessica_lee}
            alt=""
          />
          <h2 className="educator__name">Ms. Jessica Lee</h2>
          <img src="./assets/email.svg" alt="" />
          <div className="educator-qualification">
            <h3>{`Qualification: Master's Degree in Special Education`}</h3>
            <p>
              {`Ms. Jessica's specialization in special education allows her to
              create an inclusive and supportive learning environment for all
              students. She is dedicated to helping every child reach their full
              potential.`}
            </p>
          </div>
        </div>
        <div className="educator-profile">
          <img
            className="educator__display-picture"
            src={svgs.william_parker}
            alt=""
          />
          <h2 className="educator__name">Mr. William Parker</h2>
          <img src="./assets/email.svg" alt="" />
          <div className="educator-qualification">
            <h3>{`Qualification: Bachelor's Degree in Fine Arts`}</h3>
            <p>
              {`Mr. William's background in fine arts brings creativity and
              imagination to his classNameroom. Through art projects and
              activities, he nurtures the artistic expression and
              self-confidence of his students.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
