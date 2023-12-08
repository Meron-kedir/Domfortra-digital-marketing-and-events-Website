import React from "react";

function Hero() {
  return (
    // <div className=" flex justify-between grid-cols-1 md:grid-cols-3">
    <div className='  bg-[url("public/hero-bg.png")] h-screen bg-cover bg-no-repeat bg-center margin-top: -56px; p-20 py-40'>
      <div className="flex flex-col col-span-2 items-center justify-center">
        <h1 className="mb-2 text-8xl font-bold text-center text-white">
          Welcome to DOMFORTRA
        </h1>
        <p className="text-2xl font-medium text-center text-white py-5">
          "Unleashing the power of creativity in marketing!"
        </p>
        <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start py-5">
          <a
            href="javascript:void(0)"
            className="block px-6 py-2 text-center text-white bg-blue-500 rounded-3xl hover:bg-blue-950"
          >
            Get Started
          </a>
          <a
            href="javascript:void(0)"
            className="block px-6 py-2 text-center text-white bg-blue-500 rounded-3xl hover:bg-blue-950"
          >
            Our Services
          </a>
        </div>
        {/* <div className="flex flex-row items-end justify-end py-3">
          <img
            src="public/hero-img.svg"
            alt="hero 2"
            style={{ width: "300px", height: "200px" }}
          />
        </div> */}

        {/* <div className="flex flex-col items-center py-3">
          <img src="public/Animation - 1701845456553.json" alt="image" />
        </div> */}
      </div>
    </div>
    // </div>
  );
}

export default Hero;
