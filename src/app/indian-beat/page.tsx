import React from "react";
import Image from "next/image"; // ✅ Use next/image
import "./indianbeat.css";
import Footer from "../Footer";

const Page = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="container fade-in">
        <div className="product-image fade-in">
          {/* ✅ Replaced <img> with Next.js <Image /> */}
          <Image
            src="/rajan.png"
            alt="Indian Beat"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="product-name-info fade-in">
          <div
            className="text-content fade-in"
            style={{ position: "relative", bottom: "50px" }}
          >
            <h1 className="product-text">Indian Beat</h1>
            <button className="music-button fade-in">▶ Play Music</button>
            <br />
            <br />
            <div className="info-boxes fade-in">
              <div className="info-box fade-in">Add to cart</div>
              <div className="info-box fade-in">Buy Now</div>
            </div>
          </div>
        </div>
      </div>

      <div className="beat-preview fade-in">
        <h1 className="text-preview">🎧 Beat Preview</h1>
        <br />
        <br />
        <div className="beats">🚀 Your beats will appear here...</div>
      </div>
      <br />

      <div className="beat-pack-container fade-in">
        <h2 className="beat-pack-title">
          Experience 1 GB+ of Indian Beats — Premium Ready-to-Use Tracks
        </h2>

        <p className="beat-pack-description">
          The Indian Beat Pack delivers a carefully selected collection of
          finished beats inspired by India&apos;s legendary musical styles and
          instruments. Every track is professionally produced, mixed, and
          mastered—just drag and drop into projects.
        </p>

        <h3
          className="beat-pack-subtitle"
          style={{ color: "#ae4c4c", textDecoration: "none" }}
        >
          What&apos;s Inside:
        </h3>
        <ul className="beat-pack-list">
          <li>5 premium, original beats (WAV/MP3)</li>
          <li>
            Genres include Hip Hop Type Beat, Indian Type Beat, Trap Type Beat,
            Bollywood, Chill, and Fusion
          </li>
          <li>
            Features Indian instruments: Sitar, Bansuri, Sarangi, Tabla,
            Shehnai, Harmonium, Dholak, and more
          </li>
          <li>Each beat labeled with BPM, key, and mood</li>
          <li>
            Ready for rappers, singers, and media projects—license and use
            instantly
          </li>
          <li>100% original, royalty-free</li>
          <li>
            Commercial Use – No copyright strikes, no stress
          </li>
          <li>
            Ready to use on Spotify, Apple Music, YouTube, and more
          </li>
        </ul>

        <p className="beat-pack-description">
          Designed for artists and creators who want the signature sound of
          India fused with contemporary genres, the Indian Beat Pack is perfect
          for standing out with authentic vibes and modern production.
        </p>
      </div>
      <br />
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
      <br />

      <div className="license-background-container">
        <div className="license-container">
          <h2 className="license-heading">
            <span className="license-icon" style={{ color: "#ff512f" }}></span>{" "}
            <span className="tak"> Unlimited License Terms </span>
          </h2>

          <div className="license-row">
            {/* ✅ You CAN */}
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

            {/* ❌ You CANNOT */}
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
      <Footer />
    </>
  );
};

export default Page;
