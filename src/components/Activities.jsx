import React from "react";

const activities = [
  {
    title: "Two odd occurring numbers",
    description:
      "If you are given a list of numbers in which all numbers occur at even times except two, write a program to find those two numbers.",
    video:
      "https://www.codingal.com/resources/wp-content/themes/astra-child/images/course-gif/odd-occuring.webm",
  },
  {
    title: "Generate all substrings of a given string",
    description:
      "Write a program that generates all the possible substrings from any string entered by the user.",
    video:
      "https://www.codingal.com/resources/wp-content/themes/astra-child/images/course-gif/odd-occuring.webm",
  },
  {
    title: "Swap two numbers without using third variable",
    description:
      "Write a program to swap two numbers without using a third variable using Bitwise operators.",
    video:
      "https://www.codingal.com/resources/wp-content/themes/astra-child/images/course-gif/odd-occuring.webm",
  },
];

const Activities = () => (
  <div className="bg-white p-6 md:px-24 mb-6">
    <h2 className="text-3xl font-semibold mb-4 md:mb-16 text-center">
      Activities to master data structures and algorithms
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center md:px-6">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden max-w-[22rem] mx-auto md:pb-6"
        >
          <video className="w-full" autoPlay loop muted>
            <source src={activity.video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Activities;
