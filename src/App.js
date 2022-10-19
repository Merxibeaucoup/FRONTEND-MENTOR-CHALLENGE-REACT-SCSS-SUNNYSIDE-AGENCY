import React from "react";
import CTA from "./components/CTA";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <CTA />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
