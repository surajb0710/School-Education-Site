import Overview from '../components/AboutUs/Overview';
import AwardsRecognitions from '../components/AboutUs/AwardsRecognitions';
import History from '../components/AboutUs/History';
import MissionVision from '../components/AboutUs/MissionVision';
import Team from '../components/AboutUs/Team';

const AboutUs = () => {
  return (
    <main>
      <Overview />
      <MissionVision />
      <AwardsRecognitions />
      <History />
      <Team />
    </main>
  );
};

export default AboutUs;
