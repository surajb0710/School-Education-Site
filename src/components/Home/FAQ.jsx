import { useState } from 'react';
import { svgs } from '../../assets/assets.js';

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const handleExpand = (index) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqList = [
    {
      question: 'What are the school hours at Little Learners Academy?',
      answer:
        'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. Extended care options are available from 7:00 AM to 6:00 PM to accommodate working parents.',
    },
    {
      question: 'How do you handle food allergies and dietary restrictions?',
      answer:
        'We take food allergies and dietary restrictions very seriously. Parents are required to provide detailed information, and we ensure all meals and snacks are prepared safely. Individual meal plans can be arranged if needed.',
    },
    {
      question: 'Is there a uniform policy for students?',
      answer:
        'Yes, we have a uniform policy to promote a sense of community and reduce distractions. Uniforms can be purchased directly from our approved vendors.',
    },
    {
      question:
        'What is the teacher-to-student ratio at Little Learners Academy?',
      answer:
        'Our teacher-to-student ratio is 1:10 for preschoolers and 1:15 for older students, ensuring each child receives personalized attention and support.',
    },
    {
      question: 'What extracurricular activities are available for students?',
      answer:
        'We offer a variety of extracurricular activities including arts and crafts, music lessons, sports, robotics, and language classes to help students explore their interests and develop new skills.',
    },
    {
      question: 'How do you handle discipline and behavior management?',
      answer:
        'We use positive reinforcement techniques and encourage open communication with students to address behavior. Our approach focuses on teaching self-regulation and conflict resolution skills.',
    },
    {
      question: 'How do I apply for admission to Little Learners Academy?',
      answer:
        'You can apply online through our website or pick up an application form from our office. After submitting the form, our admissions team will schedule a tour and meeting to discuss next steps.',
    },
  ];

  return (
    <section className="our-faq" id="faq">
      <div className="our-faq-container">
        <p>Solutions For The Doubts</p>
        <h1>Frequently Asked Questions</h1>
        <p>
          {`Find all the essential information you need in our FAQ section,
          designed to address the most frequently asked questions and help you
          make informed decisions for your child's education.`}
        </p>
      </div>
      <div className="faq-container">
        <div className="col1">
          {faqList.map(
            (faq, index) =>
              index < Math.round(faqList.length / 2) && (
                <div className="faq" key={index}>
                  <div className="faq__question">
                    <p className="question">{faq.question}</p>
                    <div
                      className="collapse-expand-icons"
                      onClick={() => handleExpand(index)}
                    >
                      <img
                        src={!expandedItems[index] ? svgs.plus : svgs.minus}
                        alt=""
                        className="size-6"
                        width="24px"
                        height="24px"
                      />
                    </div>
                  </div>
                  {expandedItems[index] && (
                    <div className="faq__answer">
                      <hr />
                      <p className="answer">{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
          )}
        </div>
        <div className="col2">
          {faqList.map(
            (faq, index) =>
              index >= Math.round(faqList.length / 2) && (
                <div className="faq" key={index}>
                  <div className="faq__question">
                    <p className="question">{faq.question}</p>
                    <div
                      className="collapse-expand-icons"
                      onClick={() => handleExpand(index)}
                    >
                      <img
                        src={!expandedItems[index] ? svgs.plus : svgs.minus}
                        alt=""
                        className="size-6"
                        width="24px"
                        height="24px"
                      />
                    </div>
                  </div>
                  {expandedItems[index] && (
                    <div className="faq__answer">
                      <hr />
                      <p className="answer">{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
