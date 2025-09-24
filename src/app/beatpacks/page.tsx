import React from "react";
import "./beatpack.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Footer";

const BeatPack = () => {
  return (
    <>
    <br />
      {/* spacing */}
      <div style={{ marginTop: "5rem" }} />

      {/* Premium heading */}
      <div className="premium-collection">
        <span className="music-icon">🎵</span>
        <span className="animated-text">Premium Beat Collection</span>
      </div>
      <br />

      {/* Wallpaper image */}
      <div className="wallpaper">
        <Link href="indian-beat">
          <Image
            src="/rajan.png"
            alt="Wallpaper"
            width={800}
            height={500}
            priority
          />
        </Link>
      </div>

      {/* Indian Beat heading */}
      <Link href="indian-beat">
        <h1 className="fancy-heading">Indian Beat</h1>
      </Link>

      {/* Features section */}
      <section className="features-container">
        <div className="feature-box">
          <div className="feature-front">
            <div className="feature-icon">5</div>
            <p>Premium Beats</p>
          </div>
          <div className="feature-back">
            <span className="feature-icon">🎚️</span>
            <p>
              <b>Pro. Quality</b>
              <br />
              High-quality 24-bit WAV files, professionally mixed and mastered.
            </p>
          </div>
        </div>

        <div className="feature-box">
          <div className="feature-front">
            <div className="feature-icon">🔓</div>
            <p>Unlimited License</p>
          </div>
          <div className="feature-back">
            <span className="feature-icon">🔓</span>
            <p>
              <b>Unlimited License</b>
              <br />
              Full commercial rights to upload anywhere and monetize.
            </p>
          </div>
        </div>

        <div className="feature-box">
          <div className="feature-front">
            <div className="feature-icon">⚡</div>
            <p>Instant Download</p>
          </div>
          <div className="feature-back">
            <span className="feature-icon">⚡</span>
            <p>
              <b>Instant Download</b>
              <br />
              Immediate access to all beats after successful payment.
            </p>
          </div>
        </div>
      </section>

      {/* License section */}
      <div className="license-background-container">
        <div className="license-container">
          <h2 className="license-heading">
            <span className="license-icon" style={{ color: "#ff512f" }}></span>
            <span className="tak"> Unlimited License Terms </span>
          </h2>

          <div className="license-row">
            {/* You CAN */}
            <div className="license-section can">
              <h3 className="license-subheading">
                <span className="section-icon">✅</span> You CAN:
              </h3>
              <ul className="license-list">
                <li>Upload to Spotify, Apple Music, YouTube</li>
                <li>Monetize on all streaming platforms</li>
                <li>Use for commercial projects</li>
                <li>Sell songs made with these beats</li>
                <li>Use for live performances</li>
                <li>Create unlimited songs</li>
                <li>Upload anywhere without restrictions</li>
              </ul>
            </div>

            {/* You CANNOT */}
            <div className="license-section cannot">
              <h3 className="license-subheading">
                <span className="section-icon">❌</span> You CANNOT:
              </h3>
              <ul className="license-list">
                <li>Resell the original beat files</li>
                <li>Claim ownership of the beats</li>
                <li>Share raw beat files with others</li>
                <li>Use for sync licensing without permission</li>
                <li>Redistribute or lease to other artists</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WAV Quality */}
        <div className="wav-quality">
          <h4 className="wav-heading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="star-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Professional WAV Quality
          </h4>

          <div className="wav-grid">
            <div className="wav-item">
              <div className="wav-number">24-bit</div>
              <div className="wav-text">Professional Quality</div>
            </div>
            <div className="wav-item">
              <div className="wav-number">44.1kHz</div>
              <div className="wav-text">Studio Standard</div>
            </div>
            <div className="wav-item">
              <div className="wav-number">WAV</div>
              <div className="wav-text">Uncompressed Audio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default BeatPack;
