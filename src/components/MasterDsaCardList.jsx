import React from "react";

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
  "Algorithmic skills, techniques",
  "Data structure skills, techniques",
  "Computational thinking",
  "Problem solving",
  "Competitive coding skills",
  "Python development",
];

function MasterDsaCardList({ headingImage, headingTitle, logo, pointsArr }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg md:w-[350px]">
      <div className="mb-4 flex items-center gap-2">
        <img src={headingImage} alt="" />
        <h2 className="text-xl font-semibold ">{headingTitle}</h2>
      </div>
      <ul className="space-y-2">
        {pointsArr.map((i, index) => (
          <div key={index} className="flex items-center gap-2">
            <img src={logo} alt="" />
            <li>{i}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default MasterDsaCardList;
