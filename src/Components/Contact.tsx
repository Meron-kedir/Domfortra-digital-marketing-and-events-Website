import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function Contact() {
  return (
    <div>
      <div className="min-h-screen bg-slate-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl font-extrabold">Contact Us!</h1>
              <p className="text-gray-300 py-2">
                Ready to take your digital marketing to the next level? Get in
                touch with us today to discuss your business goals and how we
                can help you achieve them. Let's connect and grow together!
              </p>
            </div>
            <div className="flex-row flex items-center">
              <MdAttachEmail className="text-[50px] ml-4 p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all" />
              <span className="text-white ml-2">domfortra@gmail.com</span>
            </div>

            <div className="flex-row flex items-center">
              <FaPhoneVolume className="text-[50px] ml-4 p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all" />
              <span className="text-white ml-2">+251923608888</span>
            </div>

            <div className="items-center ml-32 py-2">
              <a href="https://www.instagram.com/domfortra/" target="_blank">
                <button>Contact Now</button>
              </a>
            </div>

            {/* 
            <form action="#" method="post">
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="_subject"
              />

              <textarea
                className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your message here..."
                name="message"
                style={{ height: "121px" }}
              ></textarea>

              <div className="flex justify-between">
                <input
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send ➤"
                />
                <input
                  className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                />
              </div>
              <a
                href="https://veilmail.io/e/FkKh7o"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Or click here to reveal our protected email address
              </a>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
