import React from 'react';
import stem from '../assets/stemLogo.png'

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        STEM.org Accredited Educational Experience
      </h1>
      
      <div className="flex justify-center mb-8">
        <img src={stem} alt="STEM.org Logo" className="h-24" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <InfoCard
          title="What is STEM.org?"
          content="STEM.org Educational Research (SER) is the longest continually operating STEM education research and credentialing organization that has served over 4,500 schools, districts, and organizations in over 25 countries."
        />
        <InfoCard
          title="Who gets STEM.org Accreditation?"
          content="The STEM.org Accreditation is awarded to institutions that develop 21st century skills, have an original curriculum revolving around STEM, adequately incorporate technology into classes, and offer hands-on STEM-based activities."
        />
        <InfoCard
          title="What does STEM.org Accreditation mean?"
          content="STEM.org Accreditation is awarded by STEM.org Educational Research (SER) after thoroughly examining and evaluating the educational institution's curriculum, teachers, and courses for efficiency, effectiveness, and quality."
        />
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button text="View certificate" primary={false} />
        <Button className=" px-8 py-4 relative bg-red-500 text-white rounded-lg hover:bg-red-500/80 hover:-translate-y-1 transition-all duration-200  ease-linear " text="Book a free class" primary={true} />
      </div>
      
      
    </div>
  );
}

function InfoCard({ title, content }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}

function Button({ text, primary }) {
  const baseClasses = "px-6 py-2 rounded-md font-medium";
  const primaryClasses = primary
    ? "bg-red-500 text-white hover:bg-red-600"
    : "border border-red-500 text-red-500 hover:bg-red-50";
  
  return (
    <button className={`${baseClasses} ${primaryClasses}`}>
      {text}
    </button>
  );
}

export default App;