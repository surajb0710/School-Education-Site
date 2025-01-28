import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import { svgs } from '../../assets/assets.js';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow-right`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img
        src={svgs.right_arrow}
        alt=""
        className="size-6"
        width="24px"
        height="24px"
      />
    </div>
  );
}

SampleNextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow-left`}
      style={{
        ...style,
        rotate: '180deg',
      }}
      onClick={onClick}
    >
      <img
        src={svgs.right_arrow}
        alt=""
        className="size-6"
        width="24px"
        height="24px"
      />
    </div>
  );
}

SamplePrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const testimonialList = [
    {
      name: 'Jennifer B',
      ratings: 5,
      image: svgs.jennifer,
      comment:
        'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!',
    },
    {
      name: 'David K',
      ratings: 5,
      image: svgs.david,
      comment:
        'Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.',
    },
    {
      name: 'Emily L',
      ratings: 5,
      image: svgs.emily,
      comment:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
      name: 'Robin K',
      ratings: 5,
      image: svgs.david,
      comment:
        'Little Learners Academy has inspired my child to grow academically, socially, and emotionally through engaging programs and care.',
    },
    {
      name: 'John M',
      ratings: 5,
      image: svgs.david,
      comment:
        'The nurturing environment and dedicated staff have made every day at Little Learners Academy a joyful learning experience.',
    },
    {
      name: 'Price T',
      ratings: 5,
      image: svgs.david,
      comment:
        "Little Learners Academy has been incredible in fostering my child's curiosity and love for learning in a supportive setting.",
    },
  ];

  return (
    <div className="slider-container story-carousal-slider">
      <Slider {...settings}>
        {testimonialList.map((testimonial, index) => (
          <div className="testimonials first" key={index}>
            <div className="testimonials__customer-info">
              <img src={testimonial.image} alt="" width="66px" height="66px" />
              <p className="customer-name">{testimonial.name}</p>
            </div>
            <div className="rating">
              <img
                src={svgs.star_filled}
                alt=""
                className="size-6"
                width="24px"
                height="24px"
              />
              <img
                src={svgs.star_filled}
                alt=""
                className="size-6"
                width="24px"
                height="24px"
              />
              <img
                src={svgs.star_filled}
                alt=""
                className="size-6"
                width="24px"
                height="24px"
              />
              <img
                src={svgs.star_filled}
                alt=""
                className="size-6"
                width="24px"
                height="24px"
              />
              <img
                src={svgs.star_filled}
                alt=""
                className="size-6"
                width="24px"
                height="24px"
              />
            </div>
            <p className="comments">{testimonial.comment}</p>
          </div>
        ))}
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
