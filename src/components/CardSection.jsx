import React from "react";
import Card from "./Card";

const information = [
  {
    title: "What is International Olympiad in Informatics?",
    info: " The International Olympiad in Informatics (IOI) is the world's most prestigious computer science competition for secondary school students.",
  },
  {
    title: "Why learn data structures and algorithms?",
    info: "The IOI is all about data structures and algorithms. Learning data structures and algorithms helps you get better at solving complex problems and win the IOI.",
  },
  {
    title: "Why you need expert teachers to win the IOI",
    info: "Teaching data structures and algorithms requires highly specialized skills. All our IOI teachers have extensive experience and are experts in the domain.",
  }
];

function CardSection() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-8 md:pb-24 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {information.map((item, index) => (
          <Card key={index} title={item.title} info={item.info} />
        ))}
        
      </div>
    </div>
  );
}

export default CardSection;
