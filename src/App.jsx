// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/HomePage/Navbar";
import Hero from "./components/HomePage/Hero";
import TaglineScroller from "./components/HomePage/TaglineScroller";
import BannerStats from "./components/HomePage/BannerStats";
import Services from "./components/HomePage/Services";
import FeatureSection from "./components/HomePage/FeatureSection";
import Industries from "./components/HomePage/Industries";
import LatestPosts from "./components/HomePage/LatestPosts";
import CTA from "./components/HomePage/CTA";
import Footer from "./components/HomePage/Footer";
import ContactSection from "./components/HomePage/ContactSection";
import PostDetails from "./components/HomePage/PostDetails";

import "./appStyles/AppLayout.css";

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <BrowserRouter>
      {/* Navbar is common for all pages */}
      <Navbar onOpenContact={() => setShowContact(true)} />

      <div className="app">
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TaglineScroller />
                <BannerStats />
                <Services />
                <FeatureSection />
                <Industries />
                <LatestPosts />
                <CTA />
                <Footer />
              </>
            }
          />

          {/* Post details page */}
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </div>

      {/* Contact popup modal (available on all routes) */}
      {showContact && (
        <ContactSection onClose={() => setShowContact(false)} />
      )}
    </BrowserRouter>
  );
}

export default App;
