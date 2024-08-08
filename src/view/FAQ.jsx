import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      className="flex justify-between items-center w-full text-left"
      onClick={toggleOpen}
    >
      <span className="text-base md:text-lg font-medium">{question}</span>
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    {isOpen && <div className="mt-2 text-sm md:text-base text-gray-600">{answer}</div>}
  </div>
);

const AgeCriteriaTable = () => (
  <div className="mt-4 text-sm md:text-base">
    <div className="bg-[#4CAF50] text-white font-bold py-2 px-4">
      AGE CRITERIA
    </div>
    <div className="border border-gray-200 overflow-x-auto">
      <table className="w-full">
        <tbody>
          {[
            { grade: "Pre-Nursery", age: "3+" },
            { grade: "Nursery", age: "4+" },
            { grade: "Preparatory", age: "5+" },
            { grade: "Grade I", age: "6+" },
            { grade: "Grade II", age: "7+" },
            { grade: "Grade III", age: "8+" },
            { grade: "Grade IV", age: "9+" },
            { grade: "Grade V", age: "10+" },
          ].map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="p-2 border-r border-gray-200">{item.grade}</td>
              <td className="p-2">
                The Child should be {item.age} years of age as on 30<sup>th</sup> September of the year seeking for admission
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqData = [
    {
      question: "Is there a way to apply for admission online?",
      answer: "Yes, you can apply for admission online through our website. Visit the 'APPLY' section in the navigation menu to start your application process."
    },
    {
      question: "What syllabus do you follow?",
      answer: "We follow the CBSE (Central Board of Secondary Education) syllabus for all grades."
    },
    {
      question: "What is the age criteria for admission?",
      answer: <AgeCriteriaTable />
    },
  ];

  return (
    <div className="w-full px-4 md:px-[10vw] lg:px-[15vw] py-8 md:py-[3vw] min-h-[50vh] gap-6 md:gap-8 bg-white flex flex-col">
      <div className="flex flex-col items-center">
        <h1 className="font-caveat text-4xl md:text-5xl lg:text-6xl mb-2">FAQ'S</h1>
        <div className="w-[80px] md:w-[110px] h-[3px] md:h-[5px] bg-[#038137] rounded-full relative">
          <div className="absolute right-0 top-0 w-4 md:w-5 h-full bg-[#FFCD29] rounded-full"></div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-center font-semibold font-raleway text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
          Few commonly asked questions and also all your doubts are cleared below
        </p>
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openIndex}
            toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
