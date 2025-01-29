import { useState } from 'react';
import { images } from '../../assets/assets.js';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  return (
    <section className="gallery">
      <div>
        <p>Our Gallery</p>
        <h1>Our Rooms Gallery</h1>
        <p>
          Step into our Gallery and immerse yourself in a visual journey of
          cherished moments and unforgettable experiences at our kindergarten
          school.
        </p>
      </div>
      <div className="gallery-block">
        <div className="filter-buttons">
          <button onClick={() => setFilter('All')}>All</button>
          <button onClick={() => setFilter('classrooms')}>classrooms</button>
          <button onClick={() => setFilter('Library')}>Library</button>
          <button onClick={() => setFilter('Science Lab')}>Science Lab</button>
          <button onClick={() => setFilter('Computer Lab')}>
            Computer Lab
          </button>
          <button onClick={() => setFilter('Garden and Nature Area')}>
            Garden and Nature Area
          </button>
        </div>
        {(filter === 'All' || filter === 'classrooms') && (
          <div className="gallery-container">
            <div>
              <img src={images.classroom_01} alt="" />
              <img src={images.classroom_02} alt="" />
              <img src={images.classroom_03} alt="" />
              <img src={images.classroom_04} alt="" />
            </div>
            <div className="gallery-item">
              <div>
                <h2>Classrooms</h2>
                {/* <div className="arrow-left">
                <img
                  src={svgs.right_arrow}
                  style={{ rotate: '180deg' }}
                  alt=""
                  width="24px"
                  height="24px"
                />
              </div>
              <div className="arrow-right">
                <img src={svgs.right_arrow} alt="" width="24px" height="24px" />
              </div> */}
              </div>
              <p>
                Our well-equipped classNamerooms are designed to provide a
                nurturing and stimulating learning environment. Each
                classNameroom is thoughtfully arranged to inspire creativity,
                curiosity, and engagement.
              </p>
            </div>
          </div>
        )}
        {(filter === 'All' || filter === 'Library') && (
          <div className="gallery-container">
            <div>
              <img src={images.library_01} alt="" />
              <img src={images.library_02} alt="" />
              <img src={images.library_03} alt="" />
              <img src={images.library_04} alt="" />
            </div>
            <div className="gallery-item">
              <div>
                <h2>Library</h2>
                {/* <div className="arrow-left">
                <img
                  src={svgs.right_arrow}
                  style={{ rotate: '180deg' }}
                  alt=""
                  width="24px"
                  height="24px"
                />
              </div>
              <div className="arrow-right">
                <img src={svgs.right_arrow} alt="" width="24px" height="24px" />
              </div> */}
              </div>
              <p>
                {`Our expansive library is a treasure trove of books, fostering a love
            for reading and supporting students' literacy development.`}
              </p>
            </div>
          </div>
        )}
        {(filter === 'All' || filter === 'Science Lab') && (
          <div className="gallery-container">
            <div>
              <img src={images.science_lab_01} alt="" />
              <img src={images.science_lab_02} alt="" />
              <img src={images.science_lab_03} alt="" />
              <img src={images.science_lab_04} alt="" />
            </div>
            <div className="gallery-item">
              <div>
                <h2>Science Lab</h2>
                {/* <div className="arrow-left">
              <img
                src={svgs.right_arrow}
                style={{ rotate: '180deg' }}
                alt=""
                width="24px"
                height="24px"
              />
            </div>
            <div className="arrow-right">
              <img src={svgs.right_arrow} alt="" width="24px" height="24px" />
            </div> */}
              </div>
              <p>
                Our hands-on science lab allows students to conduct experiments
                and explore scientific concepts in a fun and interactive way.
              </p>
            </div>
          </div>
        )}
        {(filter === 'All' || filter === 'Computer Lab') && (
          <div className="gallery-container">
            <div>
              <img src={images.computer_lab_01} alt="" />
              <img src={images.computer_lab_02} alt="" />
              <img src={images.computer_lab_03} alt="" />
              <img src={images.computer_lab_04} alt="" />
            </div>
            <div className="gallery-item">
              <div>
                <h2>Computer Lab</h2>
                {/* <div className="arrow-left">
              <img
                src={svgs.right_arrow}
                style={{ rotate: '180deg' }}
                alt=""
                width="24px"
                height="24px"
              />
            </div>
            <div className="arrow-right">
              <img src={svgs.right_arrow} alt="" width="24px" height="24px" />
            </div> */}
              </div>
              <p>
                {`Equipped with age-appropriate technology, the computer lab enhances
            students' digital literacy and computational skills`}
              </p>
            </div>
          </div>
        )}
        {(filter === 'All' || filter === 'Garden and Nature Area') && (
          <div className="gallery-container">
            <div>
              <img src={images.garden_nature_area_01} alt="" />
              <img src={images.garden_nature_area_02} alt="" />
              <img src={images.garden_nature_area_03} alt="" />
              <img src={images.garden_nature_area_04} alt="" />
            </div>
            <div className="gallery-item">
              <div>
                <h2>Garden and Nature Area</h2>
                {/* <div className="arrow-left">
              <img
                src={svgs.right_arrow}
                style={{ rotate: '180deg' }}
                alt=""
                width="24px"
                height="24px"
              />
            </div>
            <div className="arrow-right">
              <img src={svgs.right_arrow} alt="" width="24px" height="24px" />
            </div> */}
              </div>
              <p>
                Our garden and nature area offer an opportunity for children to
                connect with nature and learn about plants and the environment.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
