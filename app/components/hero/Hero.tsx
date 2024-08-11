"use client";

import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { useScroll } from "../../contexts/ScrollContext";

const Hero: React.FC = () => {
  const { scrollTo } = useScroll();

  return (
    <section className="h-screen w-full bg-base-300 pl-14" id="hero">
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col gap-5 text-center text-base-content p-10">
          <h4 className="text-xl">Hello there! My name is</h4>
          <h1 className="text-5xl font-bold">
            <span className="text-7xl text-accent">R</span>
            atchapong Chaiyadej
          </h1>
          <h1 className="text-4xl font-bold">Fullstack web developer</h1>
          <div className="flex justify-center">
            <p className="text-justify max-w-[540px]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`" I'm a web developer based in Thailand, ready to contribute to the exciting project. Let's connect, collaborate and build something amazing together! "`}
            </p>
          </div>
          <div className="text-center pt-3">
            <button
              onClick={() => scrollTo("about")}
              className="btn btn-warning hover:btn-primary transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-300 gap-3"
            >
              <p className="flex items-center justify-center gap-3">
                About Me
                <span className="rotate-90">
                  <FaArrowCircleDown className="animate-bounce size-5" />
                </span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
