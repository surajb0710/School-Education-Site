import { svgs } from '../../assets/assets.js';
const History = () => {
  return (
    <section className="history" id="history">
      <div>
        <p>Our Progressive Journey</p>
        <h1>Our History</h1>
        <p>
          Founded with a passion for early education in 2005, our kindergarten
          school boasts a rich history of empowering young learners to reach
          their potential through innovative teaching methods and a supportive
          learning environment
        </p>
      </div>
      <div className="history-block">
        <div>
          <img src={svgs.vr_pattern} alt="" className="line" />
        </div>

        <div className="history-block__year">
          <img src={svgs.hr_pattern_short} alt="" className="starting-line" />
          <div className="yearly-summary__year">
            <img src={svgs.history_pattern} alt="" />
            <h1>2023</h1>
          </div>
        </div>
        <div className="yearly-summary__summary">
          <h2>Resilience and Future Horizons</h2>
          <p>
            Adapting to new challenges, we remained committed to our mission of
            providing an exceptional early education. Looking ahead with
            optimism, we envision a future filled with boundless possibilities
            as we continue shaping the leaders and thinkers of tomorrow.
          </p>
        </div>

        <div className="history-block__year">
          <img src={svgs.hr_pattern_short} alt="" className="starting-line" />
          <div className="yearly-summary__year">
            <img src={svgs.history_pattern} alt="" />
            <h1>2017</h1>
          </div>
        </div>
        <div className="yearly-summary__summary">
          <h2>Innovation and Technology</h2>
          <p>
            {`Innovation became the driving force behind our kindergarten's
            progress from 2016 to 2020. Embracing the latest educational
            technologies, we crafted engaging and interactive learning
            experiences for our students.`}
          </p>
        </div>

        <div className="history-block__year">
          <img src={svgs.hr_pattern_short} alt="" className="starting-line" />
          <div className="yearly-summary__year">
            <img src={svgs.history_pattern} alt="" />
            <h1>2012</h1>
          </div>
        </div>
        <div className="yearly-summary__summary">
          <h2>Expansion and Recognition</h2>
          <p>
            These years marked as a period of expansion and recognition for our
            school. As we extended our facilities and enhanced our curriculum,
            we received accolades for our commitment to quality education and
            innovative teaching methodologies.
          </p>
        </div>

        <div className="history-block__year">
          <img src={svgs.hr_pattern_short} alt="" className="starting-line" />
          <div className="yearly-summary__year">
            <img src={svgs.history_pattern} alt="" />
            <h1>2005</h1>
          </div>
        </div>
        <div className="yearly-summary__summary">
          <h2>Inception and Growth</h2>
          <p>
            Established in 2005, our kindergarten school began its journey with
            a vision to provide a nurturing space for young minds to explore,
            learn, and grow. Over the next five years, we witnessed significant
            growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
