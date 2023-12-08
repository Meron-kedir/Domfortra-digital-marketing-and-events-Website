// import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
function Services() {
  //   const servicesList = [
  //     {
  //       id: 1,
  //       title: "Digital Marketing Strategy",
  //       description:
  //         "We develop customized digital marketing strategies tailored to your business goals, ensuring maximum impact and ROI.",
  //       logo: "public/digital-marketing1.jpg",
  //     },
  //     {
  //       id: 2,
  //       title: "Search Engine Optimization",
  //       description:
  //         "Improve your website's visibility on search engines with our SEO services, increasing organic traffic and driving conversions.",
  //       logo: "public/google2.gif",
  //     },
  //     {
  //       id: 3,
  //       title: "Social Media Marketing",
  //       description:
  //         "Engage,connect and expand your audience through effective social media marketing strategies that drive brand awareness and loyalty.",
  //       logo: "public/socialmedia3.jpg",
  //     },
  //     {
  //       id: 4,
  //       title: "Content Marketing",
  //       description:
  //         "Create compelling and relevant content that resonates with your target audience, establishing thought leadership and increasing brand credibility.",
  //       logo: "public/contentmarket4.jpg",
  //     },
  //   ];
  return (
    <div className="px-12 mt-0 bg-blue-50 shadow-md">
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-blue-600 rounded-full"></div>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className="text-[24px] text-center py-10 font-bold">
          OUR SERVICES
        </h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-blue-600 rounded-full"></div>
      </div>
      {/* product card 1 */}
      <div className="flex space-x-3">
        <div className="flex flex-col w-[1200px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg shadow-md h-[200x]"
              src="/digital-marketing1.jpg"
              alt="image1"
            />
          </a>
          <div className="flex-grow p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Digital Marketing Strategy
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400">
              We develop customized digital marketing strategies tailored to
              your business goals, ensuring maximum impact and ROI.
            </p>
            <IoArrowForwardOutline className="bg-blue-500 text-[35px] p-2 text-white ml-24 rounded-full cursor-pointer hover:scale-110 transition-all" />
          </div>
        </div>

        {/* product card 2 */}
        <div className="flex flex-col w-[1200px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg shadow-md h-[290px]"
              src="/google2.gif"
              alt="image1"
            />
          </a>
          <div className="flex-grow p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Search Engine Optimization
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400">
              Improve your website's visibility on search engines with our SEO
              services, increasing organic traffic and driving conversions.
            </p>
            <IoArrowForwardOutline className="bg-blue-500 text-[35px] p-2 text-white ml-24 rounded-full cursor-pointer hover:scale-110 transition-all" />
          </div>
        </div>

        {/* product card 3*/}
        <div className="w-[1200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg shadow-md h-[290px]"
              src="/socialmedia3.jpg"
              alt="product image"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Social Media Marketing
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400">
              Engage, connect, and expand your audience through effective social
              media marketing strategies that drive brand awareness and loyalty.
            </p>

            <IoArrowForwardOutline className="bg-blue-500 text-[35px] ml-24 p-2 text-white items-center rounded-full cursor-pointer hover:scale-110 transition-all" />
          </div>
        </div>
        {/* product card 4 */}
        <div className="flex flex-col w-[1200px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg shadow-md h-[550x]"
              src="/contentmarket4.jpg"
              alt="image1"
            />
          </a>
          <div className="flex-grow p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Content Marketing
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400">
              Create compelling and relevant content that resonates with your
              target audience, establishing thought leadership and increasing
              brand credibility.
            </p>
            <IoArrowForwardOutline className="bg-blue-500 text-[35px] p-2 text-white ml-24 rounded-full cursor-pointer hover:scale-110 transition-all" />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row space-x-3 ">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#"></a>
          {servicesList.map((item) => (
            <div className="text-center flex flex-col justify-center items-center gap-6">
              <div className="bg-gray-200 rounded-full w-[80px] h-[80px]">
                <img
                  src={item.logo}
                  className="w-[200px] h-[80px] rounded-full p-5 hover:scale-110 transition-all cursor-pointer"
                />
              </div>

              <h2 className="mt-5 font-bold">{item.title}</h2>
              <h2 className="text-gray-400">{item.description}</h2>
              <IoArrowForwardOutline className="bg-blue-500 text-[35px] p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all" />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Services;
