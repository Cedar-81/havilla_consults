import React from "react";

function TestimonialCard({ details }) {
  return (
    <div className="space-y-4 md:w-[80%] mx-auto border border-gold rounded-md p-6 shadow-lg">
      <div className="space-y-1">
        <h4 className="md:text-lg font-semibold">{details.author}</h4>
        <p className="text-xs md:text-sm">{details.city}</p>
      </div>
      <p className="text-sm md:text-base">{details.quote}</p>
    </div>
  );
}

export default TestimonialCard;
