import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import Unisex from "../pages/Unisex";
import AboutUs from "../pages/AboutUs";
import Faq from "../pages/Faq";
import ContactUs from "../pages/ContactUs";
import Joboppertunity from "../pages/Joboppertunity";

const MainWindowStyle = styled.div`
  max-width: 1800px;
  margin: auto;
`;

const Mainwindow = () => {
  return (
    <div>
      <MainWindowStyle>
        <Banner />
        <Navbar />

        <Routes>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="unisex" element={<Unisex />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="jobOpportunities" element={<Joboppertunity/>} />
        </Routes>

        <Footer />
      </MainWindowStyle>
    </div>
  );
};

export default Mainwindow;