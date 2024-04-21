import React from 'react';
import CustomCursor from '../components/Global/CustomCursor';
import Header from '../components/Global/Header';

const AboutUs = () => {
  return (
    <>
    <CustomCursor />
    <Header />
    <div className="relative h-screen">
        <div class="wrap">
        <video width="auto" height="400px" autoplay="" loop="" muted="" />
        <source src="modelaboutus.mp4"  type="video/mp4" />
        <source src="Video.ogg" type="video/ogg" />
    </div>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center">
          {/* Your page content goes here */}
          <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg">This is some content on my page.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
