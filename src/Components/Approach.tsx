// import React from "react";
// import { IoArrowForwardOutline } from "react-icons/io5";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

function Approach() {
  const approachList = [
    {
      id: 1,
      title: "Data-driven Strategies",
      description:
        "We base our decisions on data insights, ensuring our strategies are effective and deliver measurable results.",
      logo: (
        <RiNumber1
          className="items-center text-blue-800 font-extrabold"
          style={{ fontSize: "20px" }}
        />
      ),
    },
    {
      id: 2,
      title: "Creative Solutions",
      description:
        "We think outside the box to develop innovative and creative solutions that make your brand stand out from the competition.",
      logo: (
        <RiNumber2
          className="items-center text-blue-800 font-extrabold"
          style={{ fontSize: "20px" }}
        />
      ),
    },
    {
      id: 3,
      title: "Continuous Improvement",
      description:
        "We constantly analyze and optimize our campaigns to stay ahead of the curve and drive consistent growth for your business.",
      logo: (
        <RiNumber3
          className="items-center text-blue-800 font-extrabold"
          style={{ fontSize: "20px" }}
        />
      ),
    },
  ];
  return (
    <div className="px-12 mt-0 bg-slate-50 shadow-md">
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-blue-600 rounded-full"></div>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className="text-[24px] text-center py-10 font-bold">
          OUR APPROACHES
        </h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-blue-600 rounded-full"></div>
      </div>

      <div className="flex justify-around mt-0">
        {approachList.map((item) => (
          <div className="text-center flex flex-col justify-center items-center gap-6">
            <div>
              <div className="w-[200px] h-[80px] rounded-full p-5 hover:scale-110 transition-all cursor-pointer" />{" "}
              {item.logo}
            </div>

            <h2 className="mt-5 text-2xl font-bold">{item.title}</h2>
            <h2 className="text-gray-400 font-medium">{item.description}</h2>
            {/* <IoArrowForwardOutline className="bg-blue-500 text-[35px] p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Approach;
