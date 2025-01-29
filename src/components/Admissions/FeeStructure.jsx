// import { svgs } from '../../assets/assets.js';

const FeeStructure = () => {
  return (
    <section className="fee-structure">
      <div>
        <p>Our Features</p>
        <h1>Fee Structure</h1>
        <p>
          Our fee structure is transparent, and we strive to keep our fees
          competitive within the education sector. The fees vary based on the
          program, age group, and any additional services chosen.
        </p>
      </div>
      <div className="fee-structure__block">
        <div>
          <div className="fee-structure__program-details">
            <div className="program-details__header">
              <p>Program</p>
              <p>Age Group</p>
              <p>Annual Tuition</p>
              <p>Registration Fee</p>
              <p>Activity Fee</p>
            </div>
            <div className="program-details__contents">
              <div>
                <p>Nursery</p>
                <p>2 - 3 Years</p>
                <p>$1,686</p>
                <p>$162</p>
                <p>$12</p>
              </div>
              <div>
                <p>Pre - Kindergartens</p>
                <p>3 - 4 Years</p>
                <p>$2,686</p>
                <p>$220</p>
                <p>$16</p>
              </div>
              <div>
                <p>Kindergarten</p>
                <p>4 - 5 Years</p>
                <p>$3,686</p>
                <p>$340</p>
                <p>$20</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="fee-structure__additional-services">
            <h2 className="additional-services__header">Additional Services</h2>
            <div className="additional-services__contents">
              <div>
                <p>Before and After-School Care</p>
                <p>$120 / per month</p>
              </div>
              <div>
                <p>Language Immersion Program</p>
                <p>$60 / per semester</p>
              </div>
              <div>
                <p>Transportation (optional)</p>
                <p>$80 / per month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;
