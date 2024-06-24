import React from "react";
import skills from "../assets/skillsLogo.svg";
import what from "../assets/whatLogo.png";
import achieve from "../assets/achieveLogo.svg";
import trophy from "../assets/trophyBlue.svg";
import tick from "../assets/tickLogo.svg";
import MasterDsaCardList from "./MasterDsaCardList";
import skills1 from "../assets/skills1.png";
import skills2 from "../assets/skills2.png";
import skills3 from "../assets/skills3.png";
import skills4 from "../assets/skills4.png";
import skills5 from "../assets/skills5.png";
import skills6 from "../assets/skills6.png";

const whatYoullLearn = [
  "Algorithms, data structures basics",
  "Numbers and mathematics",
  "Recursion, arrays, graphs",
  "Binary search trees",
  "Heap, hashing",
  "Searching and sorting algorithms",
  "Backtracking, greedy algorithms",
  "Dynamic programming",
];

const whatYoullAchieve = [
  "IOI Algorithms Certification",
  "Python Developer Certification",
  "Coding Champion Certification",
  "Badges and leaderboard rankings",
  "Preparation for competitions",
  "Lifetime community access",
  "Downloadable resources",
  "Exclusive access to competitions",
];

const skillsYoullGain = [
  {
    text: "Algorithmic skills, techniques",
    icon: skills1,
  },
  {
    text: "Data structure skills, techniques",
    icon: skills2,
  },
  {
    text: "Computational thinking",
    icon: skills3,
  },
  {
    text: "Problem solving",
    icon: skills4,
  },
  {
    text: "Competitive coding skills",
    icon: skills5,
  },
  {
    text: "Python development",
    icon: skills6,
  },
];

function MasterDsaSection() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">
          Master data structures and algorithms
        </h1>
        <p className="mt-2 text-gray-600">
          Learn the basics of data structures and algorithms (DSA), master
          algorithmic programming techniques, and apply your newly-learned
          skills to win the IOI
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        <MasterDsaCardList
          headingTitle={"What you'll learn"}
          headingImage={what}
          logo={tick}
          pointsArr={whatYoullLearn}
        />
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4 flex items-center gap-2">
            <img src={achieve} alt="Skills icon" />
            <h2 className="text-xl font-semibold">Skills you’ll gain</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {skillsYoullGain.map((skill, index) => (
              <div key={index}>
                <img
                  src={skill.icon}
                  alt={skill.text}
                  className="mx-auto mb-2"
                />
                <p>{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
        <MasterDsaCardList
          headingTitle={"What you'll achieve"}
          headingImage={skills}
          logo={trophy}
          pointsArr={whatYoullAchieve}
        />
        {/* <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4 flex items-center gap-2">
            <img src={skills} alt="" />
            <h2 className="text-xl font-semibold ">What you'll achieve</h2>
          </div>
          <ul className="space-y-2">
            <li>IOI Algorithms Certification</li>
            <li>Python Developer Certification</li>
            <li>Coding Champion Certification</li>
            <li>Badges and leaderboard rankings</li>
            <li>Preparation for competitions</li>
            <li>Lifetime community access</li>
            <li>Downloadable resources</li>
            <li>Exclusive access to competitions</li>
          </ul>
        </div> */}
      </div>
      <button className=" px-8 py-4 relative bg-red-500 text-white rounded-lg hover:bg-red-500/80 hover:-translate-y-1 transition-all duration-200  ease-linear mt-2 md:mt-6 ">
        Book a free class
      </button>
    </div>
  );
}

export default MasterDsaSection;
