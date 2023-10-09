import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import AboutMePage from '../Pages/AboutMePage';
import ResultsPage from '../Pages/ResultsPage';
import PricindAndProgramsPage from '../Pages/PricingAndPrograms';
import ContactPage from '../Pages/ContactPage';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
const Root = () => {
  
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/programs" element={<PricindAndProgramsPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer/>
      </Router>
    );
  };
  
  export default Root;