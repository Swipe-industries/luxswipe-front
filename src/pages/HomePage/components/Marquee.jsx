import React from 'react';
import './VerticalMarquee.css';

const VerticalMarquee = ({ children }) => {
  // Define the number of repetitions
  const repetitionCount = 1; // Adjust as needed

  const totalHeight = React.Children.count(children) * repetitionCount * 40;

  // Duplicate the children to create a continuous loop
  const repeatedChildren = React.Children.toArray(children).reduce((acc, child) => {
    for (let i = 0; i < repetitionCount; i++) {
      acc.push(React.cloneElement(child, { key: `${i}-${child.key}` }));
    }
    return acc;
  }, []);

  return (
    <div className="vertical-marquee" style={{height: `${totalHeight}px`}} >
      <div className="animate-marquee">
        {React.Children.toArray(children).map((child, index) => (
          <div key={index} className="marquee-item" style={{ top: `${index * 100}%` }} >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalMarquee;
