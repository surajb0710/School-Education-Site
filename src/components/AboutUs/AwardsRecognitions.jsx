import { svgs } from '../../assets/assets.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

const AwardsRecognitions = () => {
  const awards = [
    {
      title: 'Outstanding Early Childhood Education Award',
      details:
        "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
      title: 'Innovative STEAM Education Award',
      details:
        'Awarded by the Education Excellence Association for pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.',
    },
    {
      title: 'Excellence in Inclusive Education Award',
      details:
        'Presented by the Global Education Alliance, honoring our dedication to creating an inclusive learning environment that supports children of all abilities and backgrounds.',
    },
    {
      title: 'Best Early Literacy Program Award',
      details:
        'Recognized by the International Literacy Foundation for excellence in developing literacy programs that enhance early reading and language skills in young learners.',
    },
    {
      title: 'Community Impact Award in Education',
      details:
        "Awarded by the National Education Foundation, acknowledging our school's significant impact on the community through innovative education and outreach programs.",
    },
    {
      title: 'Best Technology Integration in Early Education',
      details:
        'Presented by the EdTech Innovators Association for successfully integrating technology into early childhood education to enhance learning experiences.',
    },
    {
      title: 'Green School Excellence Award',
      details:
        'Recognized by the Sustainable Schools Network for our commitment to environmental sustainability and eco-friendly practices in education.',
    },
    {
      title: 'Outstanding Arts in Education Award',
      details:
        'Honored by the National Arts Council for excellence in incorporating arts into early childhood education, fostering creativity and self-expression.',
    },
    {
      title: 'Parent Engagement Excellence Award',
      details:
        "Presented by the Family Education Partnership, recognizing our strong collaboration with parents to enhance children's learning experiences and development.",
    },
    {
      title: 'Excellence in Early Childhood Health and Wellness',
      details:
        'Awarded by the Children’s Health Foundation for outstanding programs promoting physical and mental wellness among young learners.',
    },
    {
      title: 'Best Play-Based Learning Curriculum',
      details:
        'Honored by the Early Learning Research Institute for our innovative play-based learning approach that supports cognitive and social development in young children.',
    },
    {
      title: 'Excellence in Multilingual Education',
      details:
        'Recognized by the Global Language Learning Association for outstanding efforts in fostering multilingual skills in early childhood education.',
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null); // Reference to the slider

  const goToNext = () => {
    sliderRef.current.slickNext(); // Navigate to the next slide
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev(); // Navigate to the previous slide
  };

  return (
    <section className="awards-recognitions" id="awards-recognitions">
      <div>
        <p>Our Achievements</p>
        <h1>Our Awards and Recognitions</h1>
        <p>
          {`Little Learners Academy takes pride in our commitment to delivering
          high-quality education and outstanding student experiences. We are
          honored to have received various awards and recognitions for our
          dedication to early childhood education. These accolades reflect our
          team's relentless efforts in creating an exceptional learning
          environment for our students.`}
        </p>
      </div>
      <div>
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {awards.map((award, index) => (
              <div className="award-container" key={index}>
                <img src={svgs.pie_chart} alt="" />
                <div className="awards first">
                  <h2>{award.title}</h2>
                  <p>{award.details}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="arrow-block">
          <p>{awards.length - 3} More Awards</p>
          <div className="arrow-left" onClick={goToPrev}>
            <img
              src={svgs.right_arrow}
              alt=""
              className="size-6"
              width="24px"
              height="24px"
            />
          </div>
          <div className="arrow-right" onClick={goToNext}>
            <img
              src={svgs.right_arrow}
              alt=""
              className="size-6"
              width="24px"
              height="24px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognitions;
