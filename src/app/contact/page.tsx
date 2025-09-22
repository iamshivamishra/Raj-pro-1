import React from 'react'
import Footer from '../Footer'
import './about.css'

const page = () => {
  return (
    <>
    <br />
    <br />
    <br />
   <div className="contact-container">
  <h1>Contact Us – TrishulBeats.com</h1>
  <p className="contact-intro">We’re here to help! If you have any questions about our beats, purchases, or services, feel free to reach out.</p>

  <div className="contact-info">
    <p><span className="icon">📩</span> Email: <a href="mailto:trishulmusic111@gmail.com">trishulmusic111@gmail.com</a></p>
    <p><span className="icon">⏱️</span> Response Time: We usually reply within 24 hours.</p>
    <p className="note">Note: All beat packs are digital products and delivered via instant download after successful payment.</p>
  </div>
</div>

<br />
    <Footer/>
    </>
  )
}

export default page
