import "./App.css";
import Activities from "./components/Activities";
import BenefitsSection from "./components/BenefitsSection";
import BottomFooter from "./components/BottomFooter";
import CardSection from "./components/CardSection";
import CourseBanner from "./components/CourseBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MasterDsaSection from "./components/MasterDsaSection";
import StemAccreditation from "./components/Stem";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CardSection />
      <BenefitsSection />
      <MasterDsaSection />
      <Activities />
      <StemAccreditation />
      <Testimonials />
      <CourseBanner />
      <Footer />
      <BottomFooter />
    </>
  );
}

export default App;
