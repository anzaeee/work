import React from 'react';
import { RiChat3Line } from 'react-icons/ri'; // Importing the RiChat3Line icon

const Card = ({ imageUrl, title, subheading, helperText, price, isMostPopular }) => {
  return (
    <div className={`flex flex-col items-center p-4 ${isMostPopular ? 'relative' : ''} transition-transform hover:scale-105`}>
      {isMostPopular && <div className="absolute top-0 left-0 bg-yellow-500 text-black px-2 py-1 rounded-tl-md rounded-br-md shadow-md z-10">Most Popular</div>}
      <img src={imageUrl} alt="Your Image" className="w-full h-1/2 object-cover transform" /> {/* Set width to full, height to half, and use object-cover to fill the container */}
      <div className="flex flex-col justify-between w-full mt-2 px-4"> {/* New div to wrap the content excluding the image */}
        <div>
          <div className="text-xl font-semibold mt-2">{title}</div>
          <div className="text-md text-gray-700 mt-1">{subheading}</div>
        </div>
        <div className="text-sm text-gray-500 mt-1 pb-1 border-b border-gray-300">{helperText}</div> {/* Adjusted padding bottom */}
        <div className="flex justify-between items-center mt-2">
          <div className="text-gray-700">{price}</div>
          <div className="flex items-center text-gray-700">
            <RiChat3Line className="mr-1" />Comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
