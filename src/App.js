import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import LogoShowcase from "./components/LogoShowcase";
import Services from "./components/Services";
import BoldStatement from "./components/BoldStatement";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import Work from "./components/Work";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      {/* <LogoShowcase /> */}
      <Services />
      <BoldStatement />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <Work />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
