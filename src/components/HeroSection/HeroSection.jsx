import React from "react";
import Video1 from "../../assets/video1.mp4";
import Video2 from "../../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-900 bg-clip-text text-transparent">
          {/* &nbsp; */} for developers
        </span>
      </h1>
      <div>
        <p className="mt-10 text-sm text-center md:text-lg text-neutral-500 lg:max-w-4xl max-w-2xl  ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptas
          cumque unde dolore consectetur optio.
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md mx-3"
          >
            Start Free Trail
          </a>

          <a href="" className="py-3 px-4 mx-3 rounded-md border">
            Documentation
          </a>
        </div>
      </div>
      {/*  */}
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/*  */}
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={Video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
