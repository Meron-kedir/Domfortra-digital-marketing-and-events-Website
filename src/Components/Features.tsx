import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";

function Features() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      />

      <section className="bg-slate-50 py-8">
        <div className="container mx-auto text-center px-4">
          <div className="flex items-center">
            <div className="w-[20px] h-[7px] bg-blue-600 rounded-full"></div>
            <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
            <h2 className="text-[24px] text-center py-10 font-bold">
              WHY CHOOSE DOMFORTRA?
            </h2>
            <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
            <div className="w-[20px] h-[7px] bg-blue-600 rounded-full"></div>
          </div>
          <div className="flex flex-wrap ml-60">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 shadow-md rounded-md">
                <GrUserExpert className="fas fa-lock text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Expertise
                </h3>
                <p className="text-gray-600">
                  Our team of digital marketing experts has extensive experience
                  in delivering successful campaigns across various industries.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3  px-4 mb-8">
              <div className="bg-white p-8 h-[270px] shadow-md rounded-md">
                <MdOutlinePersonalInjury className="fas fa-lock text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Personalized Approach
                </h3>
                <p className="text-gray-600">
                  We take the time to understand your unique business needs and
                  tailor our solutions to achieve your specific objectives.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap ml-60 items-center">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-8 shadow-md rounded-md">
                <FcStatistics className="fas fa-lock text-4xl bg-blue-500 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Proven Results
                </h3>
                <p className="text-gray-600">
                  Our track record speaks for itself. We have helped numerous
                  businesses achieve significant growth and success online.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4  mb-8">
              <div className="bg-white p-8 shadow-md rounded-md">
                <i className="fas fa-users text-4xl text-blue-500 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Customer Satisfaction
                </h3>
                <p className="text-gray-600">
                  We prioritize exceptional customer service, always going the
                  extra mile to ensure our clients are satisfied with our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
