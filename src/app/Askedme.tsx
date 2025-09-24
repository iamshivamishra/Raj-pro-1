import React, { useState } from 'react';
import './Askedme.css';

const faqs = [
  {
    question: "Who is Trishul Beats?",
    answer:
      "Trishul Beats, also known as Rajan Mishra, is a talented music producer and composer from India. Working with major rappers and artists from India, he brings a unique and creative touch to every project.",
  },
  {
    question: "What is the cost of my production?",
    answer:
      "Pricing varies depending on the complexity of your project. Contact me directly for custom quotes based on your needs.",
  },
  {
    question: "Why would one choose me?",
    answer:
      "I provide unique beats, high-quality sound design, and a personalized approach to every project, ensuring you get the perfect sound for your music.",
  },
  {
    question: "What type of software do I use?",
    answer:
      "I use industry-standard DAWs such as FL Studio, Logic Pro, and Ableton Live, along with top-tier plugins for mixing and mastering.",
  },
];

const Askedme = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="faq-section">
        <div className="faq-header">
          <div className="faq-icon">❓</div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Answers to common questions about my services, and policies.
          </p>
          <div className="faq-underline"></div>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon-btn">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <br />
    </>
  );
};

export default Askedme;
