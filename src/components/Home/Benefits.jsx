import { svgs } from '../../assets/assets.js';

const Benefits = () => {
  const benefits = [
    {
      title: 'Holistic Learning Approach',
      icon: svgs.hat,
      description:
        'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.',
    },
    {
      title: 'Experienced Educators',
      icon: svgs.crown,
      description:
        'Our passionate and qualified teachers create a supportive and stimulating learning environment.',
    },
    {
      title: 'Nurturing Environment',
      icon: svgs.face_mask,
      description:
        'We prioritize safety and provide a warm and caring atmosphere for every child.',
    },
    {
      title: 'Play-Based Learning',
      icon: svgs.flag,
      description:
        'We believe in the power of play to foster creativity, problem-solving skills, and imagination.',
    },
    {
      title: 'Individualized Attention',
      icon: svgs.wheel,
      description:
        "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    },
    {
      title: 'Parent Involvement',
      icon: svgs.group,
      description:
        'We foster a strong parent-school partnership to ensure seamless communication and collaboration.',
    },
  ];

  return (
    <section className="ourBenefits" id="features">
      <div className="ourBenefits__container">
        <p>Children Deserve Bright Future</p>
        <h1>Our Benefits</h1>
        <p>
          {`With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child's future.`}
        </p>
      </div>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div className="benefits" key={index}>
            <div>
              <div className="icon-container">
                <img
                  src={benefit.icon}
                  alt=""
                  className="size-6"
                  width="34px"
                  height="34px"
                />
              </div>
              <h2>{benefit.title}</h2>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
