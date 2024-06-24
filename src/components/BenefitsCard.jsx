import React from "react";

function BenefitsCard({icon , title}) {
  return (
    <div
     
      className="flex flex-col items-center text-center p-4  md:h-64"
    >
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <p className="text-lg font-medium">{title}</p>
    </div>
  );
}

export default BenefitsCard;
