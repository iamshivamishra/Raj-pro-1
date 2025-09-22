"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaYoutube, FaFacebook, FaInstagram, FaSpotify } from "react-icons/fa";
import "./globals.css";

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${isScrolled ? "scrolled" : ""}`}>
      <p>© {new Date().getFullYear()} All Rights Reserved.</p>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://youtube.com/@trishulbeats" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.facebook.com/trishulbeats" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/trishulbeats" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://open.spotify.com/artist/2NymkQcUWoYwzaR1fTcR6c?si=IJx2krfDQm6_Y-B9IuzZ0g" target="_blank" rel="noopener noreferrer">
          <FaSpotify />
        </a>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <Link href="/about">About</Link>|
        <Link href="/contact">Contact Us</Link>|
        <Link href="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
