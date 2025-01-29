import Benefits from '../components/Home/Benefits';
import FAQ from '../components/Home/FAQ';
import Hero from '../components/Home/Hero';
import Navigation from '../components/Home/Navigation';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Navigation />
    </main>
  );
};

export default Home;
