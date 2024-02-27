import React from "react";
import "./VerticalMarquee.css";

const Marquee = ({ children }) => {
  // Define the number of repetitions
  const repetitionCount = 1; // Adjust as needed

  // Duplicate the children to create a continuous loop
  const repeatedChildren = React.Children.toArray(children).reduce(
    (acc, child) => {
      for (let i = 0; i < repetitionCount; i++) {
        acc.push(React.cloneElement(child, { key: `${i}-${child.key}` }));
      }
      return acc;
    },
    []
  );

  return (
    <div className="vertical-marquee w-24 h-28 md:h-40 scroll-smooth font-poppins tracking-tighter text-lg md:text-2xl">
      <div className="animate-marquee">
        {React.Children.toArray(children).map((child, index) => (
          <div
            key={index}
            className="marquee-item"
            style={{ top: `${index * 100}%` }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
