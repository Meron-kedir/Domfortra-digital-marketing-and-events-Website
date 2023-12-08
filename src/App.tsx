// import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
// import SideBar from "./Components/SideBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import ProgressBar from "./Components/ProgressBar";
import Approach from "./Components/Approach";
import Footer from "./Components/Footer";
import Features from "./Components/Features";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Header />
      {/* <SideBar /> */}
      <Hero />
      <About />
      <Services />
      <Approach />
      <Features />
      <Contact />
      <ProgressBar />
      <Footer />
      {/* <div className="ml-[90px] flex justify-between grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">Company Info</div>
        <div>Company moto</div>
      </div> */}
    </>
  );
}

export default App;
