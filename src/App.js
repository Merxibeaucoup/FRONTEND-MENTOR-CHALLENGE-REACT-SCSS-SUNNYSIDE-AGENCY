import React from "react";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="app">
      <Header />
      <CTA />
      <Testimonials />
    </div>
  );
};

export default App;
