import React from "react";
import icon1 from "../assets/benefits1.webp";
import icon2 from "../assets/benefits2.webp";
import icon3 from "../assets/benefits3.webp";
import BenefitsCard from "./BenefitsCard";

const benefits = [
  {
    icon: icon1,
    title: "Solve complex programming challenges",
  },
  {
    icon: icon2,
    title: "Learn to write clean, effective, and highly optimized code",
  },
  {
    icon: icon3,
    title: "Win coding competitions including the IOI",
  },
  {
    icon: icon1,
    title: "Start your journey to become a data scientist",
  },
  {
    icon: icon1,
    title: "Pathway to career in software engineering",
  },
  {
    icon: icon1,
    title: "Ace interviews with top-notch companies",
  },
];

function BenefitsSection() {
  return (
    <div className="  max-w-5xl mx-auto px-4 py-8 md:py-16 text-center">
      <h2 className="text-4xl font-bold mb-8">
        Benefits of learning data structures and algorithms
      </h2>
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10  md:px-16">
          {benefits.map((benefit, index) => (
            <BenefitsCard
              icon={benefit.icon}
              title={benefit.title}
              key={index}
            />
          ))}
        </div>
      </div>
      <button className=" px-8 py-4 relative bg-red-500 text-white rounded-lg hover:bg-red-500/80 hover:-translate-y-1 transition-all duration-200  ease-linear ">
        Book a free class
      </button>
    </div>
  );
}

export default BenefitsSection;
