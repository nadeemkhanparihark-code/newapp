import { useState } from 'react';
import faqData from '../../data/faq.json';
import '../../styles/faq.css';

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className={`faq-item ${activeId === faq.id ? 'active' : ''}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFaq(faq.id)}
            >
              {faq.question}
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
