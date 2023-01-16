import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import How from '../../components/How/How';
import Testimonials from '../../components/Testimonials/Testimonials';
import Updates from '../../components/Updates/Updates';
import Adv from '../../components/Adv/Adv';
import Header from '../../components/Header/Header';
import Faq from '../../components/Faq/Faq';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <How />
      <Testimonials />
      <Updates />
      <Adv />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
