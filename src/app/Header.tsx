"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import "./globals.css";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      <h1 className="logos">
        <Link href="/" className="logos">
          Trishul Beats
        </Link>
      </h1>

      {/* Hamburger button */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
</div>
      <nav>
        <ul className={`nav-lists ${menuOpen ? "active" : ""}`}>
          <li>
            <Link href="/" className="nav-links" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/beatpacks" className="nav-links" onClick={() => setMenuOpen(false)}>Beat Packs</Link>
          </li>
          <li>
            <Link href="/contact" className="nav-links" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link href="/cart" className="nav-links flex-centers" onClick={() => setMenuOpen(false)}>
              <FaShoppingCart size={18} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
