import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline'; // Import the ChevronDownIcon from Heroicons

const FAQPage = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is E-comzy?",
      answer: "E-comzy is your one-stop shop for clothing and daily necessities, offering a wide range of products to meet all your needs.",
      open: false
    },
    {
      question: "How do I create an account?",
      answer: "You can create an account by clicking on the 'Sign Up' button on the top right corner of the homepage and filling in your details.",
      open: false
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, debit cards, and PayPal.",
      open: false
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email which you can use to track your order on our website.",
      open: false
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on most items. Please visit our Return Policy page for more details.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    }));
  };

  return (
    <div className="max-w-screen-md mx-auto p-6 mt-14  mb-20">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-gray-100 cursor-pointer" onClick={() => toggleFAQ(index)}>
              <div className="font-semibold">{faq.question}</div>
              <ChevronDownIcon className={`h-5 w-5 transform ${faq.open ? 'rotate-180' : ''}`} />
            </div>
            {faq.open && (
              <div className="p-4 bg-white">
                <div>{faq.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
