import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { svgs } from '../../assets/assets.js';

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ position: 'relative', width: '80%', margin: 'auto' }}>
      <Slider {...settings}>
        <div>
          <img src={svgs.jennifer} alt="Slide 1" />
        </div>
        <div>
          <img src={svgs.jennifer} alt="Slide 2" />
        </div>
        <div>
          <img src={svgs.jennifer} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
