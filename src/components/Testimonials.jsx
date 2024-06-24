import student1 from "../assets/student1.png";
import React from "react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Mohit Hulse",
    grade: "Grade 11",
    title: "CodeWars Winner",
    image: student1,
    quote:
      "I always enjoy Codingal competitions as the increasing difficulty levels as we progress make it so much more exciting.",
  },
  {
    name: "Siddhant",
    grade: "Grade 10",
    title: "HPE CodeWars Winner",
    image: student1,
    quote:
      "Codingal gave me the once-in-a-lifetime experience of seeing my code run on the International Space Station.",
  },
  {
    name: "Swastik",
    grade: "Grade 12",
    title: "HPE CodeWars Winner",
    image: student1,
    quote:
      "I won the HPE CodeWars competition and got the opportunity to run an experiment on the ISS thanks to Codingal.",
  },
  {
    name: "Sushil Raaja U",
    grade: "Grade 11",
    title: "Code Battle #1 Winner",
    image: student1,
    quote:
      "As a student preparing for the IOI, Codingal has helped me greatly improve my problem solving and algorithmic thinking.",
  },
  {
    name: "Sushil Raaja U",
    grade: "Grade 11",
    title: "Code Battle #1 Winner",
    image: student1,
    quote:
      "As a student preparing for the IOI, Codingal has helped me greatly improve my problem solving and algorithmic thinking.",
  },
];

const Testimonial = ({ image, quote, name, title, grade }) => (
  <div className=" flex items-center bg-white  shadow-lg rounded-xl p-6 md:py-10 md:pr-16 relative m-4 ">
    <div className="flex flex-col md:px-16 ">
      <p className="text-xl font-semibold">{quote}</p>
      <span className="ml-auto mt-4 font-bold">{name}</span>
      <span className="ml-auto">
        {title},{grade}
      </span>
    </div>

    <img
      src={student1}
      className="absolute h-30 w-30 object-cover -bottom-2 -right-4"
      alt=""
    />
  </div>
);

const Testimonials = () => (
  <div className="bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Hear what the winners have to say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button className=" px-8 py-4 relative bg-red-500 text-white rounded-lg hover:bg-red-500/80 hover:-translate-y-1 transition-all duration-200  ease-linear ">Book a free class</Button>
      </div>
    </div>
  </div>
);
export default Testimonials;
