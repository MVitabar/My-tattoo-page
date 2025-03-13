"use client";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from '../pages/Hero';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
