'use client'
import { useState } from 'react';
import styles from './faq.module.css'

const FAQAccordion = ({ faqItems,faqItems2 }) => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };
  const [activeItem2, setActiveItem2] = useState(null);

  const toggleItem2 = (index2) => {
    if (activeItem2 === index2) {
      setActiveItem2(null);
    } else {
      setActiveItem2(index2);
    }
  };

  return (
    <div className="faqcontainer">
      <div className="faqaccordion">
        {faqItems.map((item, index) => (
          <div className={`faqitem ${activeItem === index ? 'active' : ''}`} key={index}>
            <div className="faqquestion" onClick={() => toggleItem(index)}>
              {item.question}
            </div>
            {activeItem === index && <div className="faqanswer">{item.answer} </div>}
          </div>
        ))}
      </div>
      <div className="faq-accordion2">
        {faqItems.map((item2, index2) => (
          <div className={`faqitem2 ${activeItem2 === index2 ? 'active' : ''}`} key={index2}>
            <div className="faqquestion2" onClick={() => toggleItem2(index2)}>
              {item2.question2}
            </div>
            {activeItem2 === index2 && <div className="faqanswer2">{item2.answer2} </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
