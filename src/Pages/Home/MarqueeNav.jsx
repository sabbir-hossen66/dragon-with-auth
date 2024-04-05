import React from 'react';
import Marquee from "react-fast-marquee";
const MarqueeNav = () => {
  return (
    <div className='flex max-w-screen-2xl mx-auto justify-between'>
      <button className="btn btn-error">Error</button>
      <Marquee speed={300} gradientColor='red' pauseOnHover={true}>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
    </div>
  );
};

export default MarqueeNav;