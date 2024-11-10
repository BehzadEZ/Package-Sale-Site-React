import { useEffect, useState } from 'react';
import './Faq.css';

const FAQ = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(()=>{
    console.log(openIndex);
    
  },[openIndex])

  return (
    <div className="faq-section">
      <h2>FAQ:</h2>
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(index)}>
            {item.question}
            <span>{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>    
  );
};

export default FAQ;
