import { svgs } from '../../assets/assets.js';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const pagesList = [
    {
      title: 'About Us',
      description:
        'Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.',
      url: '/about-us',
    },
    {
      title: 'Academics',
      description:
        'Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.',
      url: '/academics',
    },
    {
      title: 'Student Life',
      description:
        'Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.',
      url: '/students-life',
    },
    {
      title: 'Admissions',
      description:
        "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
      url: '/admissions',
    },
  ];
  return (
    <section className="page-navigation">
      <div className="page-navigation-container">
        <p>Explore More</p>
        <h1>Navigate through our Pages</h1>
        <p>
          Your gateway to discovering a wealth of valuable information about our
          kindergarten school, Feel free to explore and learn more about the
          enriching experiences that await your child at our kindergarten school
        </p>
      </div>
      <div className="pages-container">
        {pagesList.map((page, index) => (
          <div className="pages" key={index}>
            <h1>{page.title}</h1>
            <img src={svgs.hr_pattern} alt="" />
            <p>{page.description}</p>
            <Link to={page.url}>
              <button type="button" className="page-navigation-btn">
                Learn More
                <img
                  src={svgs.right_arrow}
                  alt=""
                  className="size-6"
                  width="24px"
                  height="24px"
                />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Navigation;
