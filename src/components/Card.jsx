import React from "react";

function Card({ title, info }) {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg md:h-[30vh]">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{info}</p>
    </div>
  );
}

export default Card;
