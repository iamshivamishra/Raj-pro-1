"use client"; // add this if using Next.js App Router

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";  // ✅ replace <img> with <Image>
import Footer from "./Footer";
import "./Home.css";
import Askedme from "./Askedme";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showScroll, setShowScroll] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

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
      <br />
      <br />
      <br />
      <br />
      <div className="home-page">
        {/* 🔍 Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Beat Packs, Samples, or Services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch} style={{ border: "none" }}>
            Search
          </button>
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

        {/* 🎶 Hero Section */}
        <div className="home-hero-aesthetic">
          <h1 className="hero-title">🎶 Elevate Your Music World</h1>
          <p className="hero-subtitle">
            Discover premium Beat Packs, Sample Packs, and Professional Mixing services
          </p>
          <button className="hero-cta">
            <Link href="indian-beat">Start Exploring</Link>
          </button>
        </div>

        {/* 🔥 Sections */}
        <section className="home-wrapper" style={{ borderRadius: "20px" }}>
          <div className="home-sections">
            <article className="home-card">
              <div className="home-card-inner">
                <div className="home-card-front">
                  <h2>🔥 Beat Packs</h2>
                  <p>Exclusive beats for your next big hit.</p>
                </div>
                <div className="home-card-back">Explore our 🔥 Beat Packs now!</div>
              </div>
            </article>

            <article className="home-card">
              <div className="home-card-inner">
                <div className="home-card-front">
                  <h2>🎵 Sample Packs</h2>
                  <p>Premium samples for producers and creators.</p>
                </div>
                <div className="home-card-back">Grab the best 🎵 Sample Packs today!</div>
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

        {/* ✅ Trusted Logos with Next.js <Image /> */}
        <h1 className="trutsed">Trusted By</h1>
        <div className="trusted-logos">
          {logos.map((logo, index) => (
            <div key={index} className="trusted-card">
              <div className="trusted-inner">
                <img
                  src={logo.img}
                  alt={logo.name}
                  width={120}
                  height={120}
                  style={{ objectFit: "contain" }}
                />
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

      <Askedme />

      {/* 📩 Contact Section */}
      <section className="contact-section">
        <div className="contact-header">
          <h2>📩 For More Info Contact Me</h2>
          <div className="contact-underline"></div>
        </div>

        <div className="contact-container">
          {/* Email */}
          <div className="contact-box">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <a href="mailto:Trishulbeats@gmail.com">trishulmusic111@gmail.com</a>
          </div>

          {/* Phone */}
          <div className="contact-box">
            <FaPhoneAlt className="contact-icon" />
            <h3>Phone</h3>
            <a href="tel:+919625796898">+91 96257 96898</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
