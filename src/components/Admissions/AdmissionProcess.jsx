import { svgs } from '../../assets/assets.js';

const AdmissionProcess = () => {
  return (
    <section className="admission-process">
      <div>
        <p>Our Features</p>
        <h1>Our Special Features</h1>
        <p>
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
      </div>
      <div className="admission-process-block">
        <div className="process-item">
          <div>01</div>
          <div>
            <img src={svgs.bubble} alt="" />
            <img src={svgs.vr_pattern} alt="" />
          </div>
          <div>
            <h2>Inquiry</h2>
            <p>
              Submit an inquiry form through our website or contact our
              admissions office to express your interest in Little Learners
              Academy.
            </p>
          </div>
        </div>
        <div className="process-item">
          <img src={svgs.vr_pattern} alt="" />
          <div>02</div>
          <div>
            <img src={svgs.bubble} alt="" />
            <img src={svgs.vr_pattern} alt="" />
          </div>
          <div>
            <h2>School Tour</h2>
            <p>
              Schedule a personalized school tour to explore our campus, meet
              our staff, and gain insights into our nurturing learning
              environment.
            </p>
          </div>
        </div>
        <div className="process-item">
          <img src={svgs.vr_pattern} alt="" />
          <div>03</div>
          <div>
            <img src={svgs.bubble} alt="" />
            <img src={svgs.vr_pattern} alt="" />
          </div>
          <div>
            <h2>Application Form</h2>
            <p>
              {`Complete the application form and provide the required documents,
              including your child's birth certificate, medical records, and any
              previous academic records (if applicable).`}
            </p>
          </div>
        </div>
        <div className="process-item">
          <img src={svgs.vr_pattern} alt="" />
          <div>04</div>
          <div>
            <img src={svgs.bubble} alt="" />
            <img src={svgs.vr_pattern} alt="" />
          </div>
          <div>
            <h2>Parent Interview</h2>
            <p>
              {`We value parent engagement, and a meeting with our admissions team
              allows us to understand your child's needs and ensure Little
              Learners Academy aligns with your family's expectations.`}
            </p>
          </div>
        </div>
        <div className="process-item">
          <img src={svgs.vr_pattern} alt="" />
          <div>05</div>
          <div>
            <img src={svgs.bubble} alt="" />
            <img src={svgs.vr_pattern} alt="" />
          </div>
          <div>
            <h2>Student Assessment</h2>
            <p>
              For certain age groups, a student assessment may be conducted to
              understand their developmental progress and ensure the best
              placement.
            </p>
          </div>
        </div>
        <div className="process-item">
          <img src="./assets/vr-pattern.svg" alt="" />
          <div>06</div>
          <div>
            <img src={svgs.bubble} alt="" />
            <img src={svgs.vr_pattern} alt="" />
          </div>
          <div>
            <h2>Acceptance</h2>
            <p>
              Once the admission process is complete, you will receive an
              official acceptance letter from Little Learners Academy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
