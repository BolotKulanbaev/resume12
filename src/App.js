import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Hedaer from "./components/Header/Header";
import Educations from "./components/pages/educations/Educations";
import Experiences from "./components/pages/experiences/Experiences";
import Home from "./components/pages/Home";

import Portfolios from "./components/pages/portfolios/Portfolios";
import Skills from "./components/pages/skills/Skills";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Hedaer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/educations" element={<Educations />} />
          <Route path="/portfolios" element={<Portfolios />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
