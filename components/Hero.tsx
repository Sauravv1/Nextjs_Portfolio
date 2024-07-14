import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/textGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 mid:-left-32 md:-top-20 h-screen"
          fill="white"
        />

        <Spotlight
          className="top1040 left-full h-[80vh] w-[50vh]"
          fill="purple"
        />

        <Spotlight className="top-428 left-80  h-[80vh] w-[50vh]" fill="blue" />
      </div>

      <div className="h-[50vh] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic web magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] ms:text-5xl lg:text-6xl"
            words=" Mastering the Art of Full Stack Web Development
            "
          />

          <p className="text-center">
            Hi, I'm Saurav Yadav FullStack Web Developer!
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;