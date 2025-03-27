import { svgs } from '../../assets/assets.js';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
  const pagesList = [
    {
      title: 'About Us',
      description:
        'Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.',
      url: '/about-us#top-anchor',
    },
    {
      title: 'Academics',
      description:
        'Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.',
      url: '/academics#top-anchor',
    },
    {
      title: 'Student Life',
      description:
        'Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.',
      url: '/students-life#top-anchor',
    },
    {
      title: 'Admissions',
      description:
        "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
      url: '/admissions#top-anchor',
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

            <HashLink smooth to={page.url}>
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
            </HashLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Navigation;
