import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/about/About";
import Resume from "../pages/resume/Resume";
import Services from "../pages/service/Services";
import Portfolio from "../pages/portfolio/Portfolio";
import Testimonial from "../pages/testimonial/Testimonial";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";

export default function Routers() {
  return (
    <div style={{paddingLeft: '280px'}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolioReact' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
