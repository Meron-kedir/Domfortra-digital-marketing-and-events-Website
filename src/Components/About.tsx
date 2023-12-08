// import React from "react";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

function About() {
  return (
    <div className="mt-12 px-10 text-center flex flex-col items-center border-b-[1px] shadow-lg">
      <h1 className="text-[40px] py-10 font-bold">ABOUT US</h1>
      <BiSolidQuoteAltLeft className="bg-blue-500 p-3 py-1 text-[44px] rounded-full mt-1 text-white" />
      <h2 className="my-5 text-gray-400 text-[25px] text-center px-10 mr-10">
        We are a start-up digital marketing agency dedicated to helping
        businesses grow and succeed online. With our range of services and
        expertise, we can help you establish a strong online presence and
        attract new clients. Start your digital journey with us today!
      </h2>
      <BiSolidQuoteAltRight className="bg-blue-500 p-3 text-[44px] rounded-full mt-6 text-white" />

      <div>
        <div className="flex flex-row items-end justify-end py-3">
          <img
            src="/hero-img.svg"
            alt="hero 2"
            style={{ width: "300px", height: "200px" }}
          />
          <p className="text-blue-900 py-0 text-[20px] px-10 mr-10">
            At DOMFORTRA, we are passionate about digital marketing and helping
            businesses reach their full potential. Our team consists of
            experienced professionals who are dedicated to delivering
            exceptional results for our clients. With our strategic approach and
            innovative solutions, we can take your online presence to the next
            level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
