import Header from "./components/header";
import Home from "./components/Home";
import "./style.scss";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import OurWorkingProcess from "./components/OurWorkingProcess";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import ContactUS from "./components/ContacUs";
import Footer from "./components/Footer";

function App() {
  const colors = { main: "#B9FF66", dark: "#191A23", gray: "#F3F3F3" };

  return (
    <div className="container mx-auto">
      <Header colors={colors} />
      <Home colors={colors} />
      <Services colors={colors} />
      <CaseStudies colors={colors} />
      <OurWorkingProcess colors={colors} />
      <Team colors={colors} />
      <Testimonials colors={colors} />
      <ContactUS colors={colors} />
      <Footer colors={colors} />
    </div>
  );
}

export default App;
