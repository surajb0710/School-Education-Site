import { svgs } from '../../assets/assets.js';

const StudentSupport = () => {
  return (
    <section className="student-support">
      <div>
        <p>Our Achievements</p>
        <h1>Student Support</h1>
        <p>
          At Little Learners Academy, we are committed to providing a supportive
          and nurturing environment that meets the unique needs of each student.
          Our student support services include
        </p>
      </div>
      <div className="student-support-block">
        <div className="support">
          <img src={svgs.light_bulb} alt="" />
          <h2>Counseling</h2>
          <p>
            Professional counselors offer guidance and support to students,
            addressing their emotional and social well-being.
          </p>
        </div>
        <div className="support">
          <img src={svgs.open_book} alt="" />
          <h2>Learning Support</h2>
          <p>
            Our educators provide additional assistance to students who may
            require extra support in their academic journey.
          </p>
        </div>
        <div className="support">
          <img src={svgs.people} alt="" />
          <h2>Parent-Teacher Collaboration</h2>
          <p>
            {`We foster a strong partnership with parents to ensure seamless
            communication and mutual support in a child's development.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentSupport;
