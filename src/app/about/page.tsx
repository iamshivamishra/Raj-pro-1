import React from 'react'
import "./about.css"
import Footer from '../Footer'

const page = () => {
  return (
   <>
   <br />
   <br />
   <br />
   <br />
   <div className="about-container">
  <h1>About Us – TrishulBeats.com</h1>
  <p className="about-text">
    Trishul Beats is an independent music producer based in India, run by 
    <span className="highlight"> Rajan Kumar Mishra</span>. We create high-quality beat packs 
    for artists worldwide, offering non-exclusive leases for rap, hip-hop, R&B, 
    and other music genres.
  </p>

  <p className="about-text">
    Our goal is to make professional beats accessible to all artists, helping you 
    create, record, and release your music with ease.
  </p>

  <div className="about-contact">
    <span className="icon">📩</span> For inquiries or support, contact: 
    <a href="mailto:trishulmusic111@gmail.com"> trishulmusic111@gmail.com</a>
  </div>
</div>
<br />
<Footer/>
   </> 
  )
}

export default page
