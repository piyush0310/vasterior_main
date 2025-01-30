import Header from "./components/Header";
import Preloader from "./components/Preloader";
import TopBar from "./components/Topbar";
import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import ServiceSection from "./components/Service";
import AboutSection from "./components/About";
import Services from "./components/Services";
import FeaturesSection from "./components/Features";
import EventSection from "./components/Blog";
import Footer from "./components/Footer";
import PortfolioCarousel from "./components/Portfolio"

const App = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <ServiceSection/>  
      <AboutSection/>
      <Services/>
      <PortfolioCarousel/>
      <FeaturesSection/>
      <EventSection/>
      <Footer/>
    </>
  );
};

export default App;