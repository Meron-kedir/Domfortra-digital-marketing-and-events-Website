import React from "react";
import { Link } from "react-scroll";

function Header() {
  const menu = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "ABOUT US",
    },
    {
      id: 3,
      name: "OUR SERVICES",
    },
    {
      id: 4,
      name: "CONTACT US",
    },
  ];
  return (
    <>
      <div className="flex shadow-lg fixed bg-white items-center w-screen justify-between border-b-[1px] h-[60px]">
        <div className="w-[100px] h-[100px] flex justify-center items-center">
          <img
            src="public/loogo2.png"
            className="p-7 "
            alt="Logo"
            // style={{ width: "10px", height: "10px" }}
          />
        </div>
        <div className="top-10 left-96 right-0 z-50 bg-white hidden md:flex gap-10 text-blue-800">
          {menu.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer hover:text-blue-500 font-medium"
            >
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
        <div> </div>

        {/* <div className="w-[90px] h-[90px] bg-blue-500 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div> */}
      </div>
    </>
  );
}

export default Header;
