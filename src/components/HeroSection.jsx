import React from "react";
import Lottie from "lottie-react";
import gradHat from "../static/gradhat.json";

const HeroSection = React.forwardRef((props, ref) => {
  return (
    <>
      <div
        ref={ref}
        className="h-[calc(500px+80px)] md:h-[calc(650px+83.2px)] flex justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient( 288deg,  rgba(0,85,255,1) 1.5%, rgba(4,56,115,1) 91.6% )",
        }}
      >
        {/* this one is to take the height of navbar */}
        <div className="h-[83.2px]"></div>
        <div className="flex justify-center lg:justify-between items-center max-sm:px-6 max-md:px-8 max-lg:px-9 px-14 max-w-[1200px] w-full">
          <div className="flex flex-col">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl max-[600px]:text-center font-primary font-bold text-primary-100 [text-shadow:2px_2px_0px_#00000033]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Learn From{" "}
              <span
                className="block text-white "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {" "}
                Anywhere, Anytime
              </span>
            </h1>
            <div
              className="mt-6 md:mt-2 text-base md:text-lg text-grey-100 font-primary max-sm:text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Your Mastery-Based, Flexible Path to Tech Excellence.
            </div>
            <div data-aos="fade-up" data-aos-delay="600" id="cardTrigger">
              <a
                role="button"
                href="#about"
                className="btn btn-md md:btn-lg  bg-green-500 text-white border-0 hover:bg-green-700 max-[600px]:mx-auto flex  mt-12 md:mt-10 w-fit"
              >
                More About Eduhub
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            className="max-[600px]:hidden"
            data-aos="zoom-in"
            data-aos-delay="650"
          >
            <Lottie animationData={gradHat} loop={true} />
          </div>
        </div>
      </div>
    </>
  );
});

export default HeroSection;
