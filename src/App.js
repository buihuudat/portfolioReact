import React from 'react';
import Routers from './components/router';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Header from './components/nav/Header';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Routers />
      </div>
      {/* <Footer /> */}
    </Router>
  )
}
