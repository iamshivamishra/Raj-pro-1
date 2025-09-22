"use client"; // add this if using Next.js App Router

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
// import styles from "./"; 
// import "./globals.css"
import Header from "./Header";
import Footer from "./Footer";
import './Home.css'
import Askedme from "./Askedme";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";  

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


   const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [showScroll, setShowScroll] = useState(false);
  const [suggestions, setSuggestions] = useState([]);


  // Show search suggestions
  // useEffect(() => {
  //   if (searchTerm === "") setSuggestions([]);
  //   else {
  //     const filtered = allSuggestions.filter(item =>
  //       item.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setSuggestions(filtered);
  //   }
  // }, [searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
    setSuggestions([]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  const logos = [
  {
    name: "News 24",
    img: "https://yt3.googleusercontent.com/ktfysjWVQCrBMIO2oQBBR58CAotdLThOhkevLiO7c_qAyVO2kap5LheweBUQt2JIMvC-iKTer0k=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "JioCinema",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png",
  },
];

  return (
   <>
    {/* <Header/> */}
    <br />
    <br />
    <br />
    <br />
    <div className="home-page">

        {/* Glassmorphic Search Bar with Suggestions */}
        <div className="search-bar" >
          <input
            type="text"
            placeholder="Search Beat Packs, Samples, or Services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch} style={{border: "none"}} >Search</button>
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((item, idx) => (
                <li key={idx} onClick={() => setSearchTerm(item)}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <br />

        {/* 🔥 Hero Section with gradient title */}
        <div className="home-hero-aesthetic">
          <h1 className="hero-title">🎶 Elevate Your Music World</h1>
          <p className="hero-subtitle">
            Discover premium Beat Packs, Sample Packs, and Professional Mixing services
          </p>
          <button className="hero-cta"><Link href="indian-beat">Start Exploring</Link></button>
        </div>
        <br />
        <br />

        {/* 🔥 Slider Component */}
        {/* <AnotherSlider /> */}

        
            <section className="home-wrapper" style={{borderRadius: "20px"}}>
      {/* <div className="home-stats">
        <div className="stat-card">
          <h2>120+</h2>
          <p>Beat Packs</p>
        </div>
        <div className="stat-card">
          <h2>80+</h2>
          <p>Sample Packs</p>
        </div>
        <div className="stat-card">
          <h2>50+</h2>
          <p>Mixing Projects</p>
        </div>
      </div> */}

      <div className="home-sections">
        <article className="home-card">
          <div className="home-card-inner">
            <div className="home-card-front">
              <h2>🔥 Beat Packs</h2>
              <p>Exclusive beats for your next big hit.</p>
            </div>
            <div className="home-card-back">
              Explore our 🔥 Beat Packs now!
            </div>
          </div>
        </article>

        <article className="home-card">
          <div className="home-card-inner">
            <div className="home-card-front">
              <h2>🎵 Sample Packs</h2>
              <p>Premium samples for producers and creators.</p>
            </div>
            <div className="home-card-back">
              Grab the best 🎵 Sample Packs today!
            </div>
          </div>
        </article>

        <article className="home-card">
          <div className="home-card-inner">
            <div className="home-card-front">
              <h2>🎚️ Mixing Services</h2>
              <p>Industry-level sound mixing and mastering.</p>
            </div>
            <div className="home-card-back">
              Professional 🎚️ Mixing Services here!  
            </div>
          </div>
        </article>
      </div>
    </section>

       
            <br /><br />

       {/* <SliderHome/> */}

        {/* Trusted Section */}
        <h1 className="trutsed">Trusted By</h1>
         <div className="trusted-logos">
      {logos.map((logo, index) => (
        <div key={index} className="trusted-card">
          <div className="trusted-inner">
            <img src={logo.img} alt={logo.name} />
            <p>{logo.name}</p>
          </div>
        </div>
      ))}
    </div>

        {/* Scroll to top button */}
        {showScroll && (
          <button className="scroll-top-btn" onClick={scrollToTop}>
            ↑
          </button>
        )}
      </div>
      <Askedme/>
      <br />
       <section className="contact-section">
      <div className="contact-header">
        <h2>📩 For More Info Contact Me</h2>
        <div className="contact-underline"></div>
      </div>

      <div className="contact-container">
        {/* Email Box */}
        <div className="contact-box">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <a href="mailto:random@gmail.com">Trishulbeats@gmail.com</a>
        </div>

        {/* Phone Box */}
        <div className="contact-box">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <a href="tel:9876543219">+91 9625796898</a>
        </div>
      </div>
    </section>
    <Footer/>
   </>
  );
}
