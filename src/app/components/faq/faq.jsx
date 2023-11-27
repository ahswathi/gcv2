"use client";
import { useState } from "react";
import styles from "./faq.module.css";
import Mainheading from "../mainheading/mainheading";

const faqItems = [
  {
    question: "What services do you offer in online marketing?",
    answer:
      "We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.",
  },

  {
    question: "What services do you offer in online marketing?",
    answer:
      "We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.",
  },

  {
    question: "What services do you offer in online marketing?",
    answer:
      "We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.",
  },
  {
    question: "What services do you offer in online marketing?",
    answer:
      "We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.",
  },

  {
    question: "What services do you offer in online marketing?",
    answer:
      "We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.",
  },

  {
    question: "What services do you offer in online marketing?",
    answer:
      "We provide a wide range of services, including SEO, PPC, content creation, social media marketing, email marketing, video marketing, branding, and online marketing strategy development.",
  },
];

const FAQAccordion = ({ faqItems2 }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [dropdown, setDropdown] = useState(null);

  const handleClick = (i) => {
    let exist = dropdown === i;

    if (exist) {
      setDropdown(null)
    } else {
      setDropdown(i)
    }
  }
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
    <div className={styles.faqcontainer}>
      <Mainheading
        titlecenter="Frequently asked questions"
        contentcenter="Visionsharp is a Web Design Agency in Manchester specialising in specific platforms and technologies. The list of our services can be found below."
      />
      {/* <div className="faqaccordion">
        {faqItems.map((item, index) => (
          <div className={`faqitem ${activeItem === index ? 'active' : ''}`} key={index}>
            <div className="faqquestion" onClick={() => toggleItem(index)}>
              {item.question}
            </div>
            {activeItem === index && <div className="faqanswer">{item.answer} </div>}
          </div>
        ))}
      </div> */}
      {/* <div className="faq-accordion2">
        {faqItems.map((item2, index2) => (
          <div className={`faqitem2 ${activeItem2 === index2 ? 'active' : ''}`} key={index2}>
            <div className="faqquestion2" onClick={() => toggleItem2(index2)}>
              {item2.question2}
            </div>
            {activeItem2 === index2 && <div className="faqanswer2">{item2.answer2} </div>}
          </div>
        ))}
      </div> */}
      <div className={styles.faqaccordion}>
        {faqItems.map((faq, i) => (
          <div className={styles.faqbox}>
            <div className={styles.aligned}>
              <div
                className={
                  dropdown === i
                    ? `${styles.dropdown} ${styles.active}`
                    : styles.dropdown
                }
                onClick={() =>handleClick(i)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="18"
                  viewBox="0 0 12 18"
                  fill="none"
                >
                  <path
                    d="M2 16L10 9L2 2"
                    stroke="#464646"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className={styles.question}>
                  {faq.question}
                </div>
                <div
                  className={styles.answer}
                  style={{ display: dropdown === i ? "flex" : "none" }}
                >
                 {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
