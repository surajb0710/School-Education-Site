import { Students_life } from '../../assets/assets.js';

const EventsCelebrations = () => {
  return (
    <section className="events-celebrations">
      <div>
        <p>Our Features</p>
        <h1>Events & Celebrations</h1>
        <p>
          At Little Learners Academy, we celebrate every milestone and create
          cherished memories for our students. Throughout the year, we host a
          variety of events and celebrations that bring the entire school
          community together. Some of our memorable events include
        </p>
      </div>
      <div className="events-celebrations-block">
        <div className="event">
          <div></div>
          <div className="event__details">
            <img src={Students_life.annual_sports_day} alt="" />
            <h2>Annual Sports Day</h2>
            <p>
              A day filled with friendly competition, team spirit, and
              sportsmanship.
            </p>
          </div>
        </div>
        <div className="event">
          <div></div>
          <div className="event__details">
            <img src={Students_life.cultural_festivals} alt="" />
            <h2>Cultural Festivals</h2>
            <p>
              Celebrations of diverse cultural festivals, promoting cultural
              exchange and appreciation.
            </p>
          </div>
        </div>
        <div className="event">
          <div></div>
          <div className="event__details">
            <img src={Students_life.art_exhibitions} alt="" />
            <h2>Art Exhibitions</h2>
            <p>
              {`Showcasing our students' artistic talents through exhibitions and
              displays.`}
            </p>
          </div>
        </div>
        <div className="event">
          <div></div>
          <div className="event__details">
            <img src={Students_life.science_fair} alt="" />
            <h2>Science Fair</h2>
            <p>
              A platform for budding scientists to present their innovative
              projects and experiments.
            </p>
          </div>
        </div>
        <div className="event">
          <div></div>
          <div className="event__details">
            <img src={Students_life.international_day} alt="" />
            <h2>International Day</h2>
            <p>
              A vibrant celebration of our diverse community, embracing cultures
              from around the world.
            </p>
          </div>
        </div>
        <div className="event">
          <div></div>
          <div className="event__details">
            <img src={Students_life.graduation_ceremony} alt="" />
            <h2>Graduation Ceremony</h2>
            <p>
              A significant milestone as our Kindergarten students prepare to
              embark on their academic journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCelebrations;
