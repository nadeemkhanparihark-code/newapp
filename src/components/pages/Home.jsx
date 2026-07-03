import Hero from '../home/Hero';
import AboutPreview from '../home/AboutPreview';
import Services from '../home/Services';
import Products from '../home/Products';
import Gallery from '../home/Gallery';
import Testimonials from '../home/Testimonials';
import Blog from '../home/Blog';
import FAQ from '../home/FAQ';
import ContactCTA from '../home/ContactCTA';
import Newsletter from '../home/Newsletter';

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Services />
      <Products limit={4} />
      <Gallery limit={4} />
      <Testimonials />
      <Blog limit={3} />
      <FAQ />
      <ContactCTA />
      <Newsletter />
    </main>
  );
};

export default Home;