import React from 'react';

const BackgroundVideoPage = () => {
  return (
    <div className="relative h-screen">
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center">
          {/* Your page content goes here */}
          <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg">This is some content on my page.</p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideoPage;
