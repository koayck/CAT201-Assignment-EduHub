import Section from "./layout/Section";

const About = () => {
  return (
    <Section id="about">
      <div className="flex flex-col justify-center items-center mb-6">
        <div className="flex flex-row gap-14 justify-between h-max relative">
          <div className="max-md:hidden basis-2/5 relative group ">
            <div className="bg-primary-500 h-full w-full absolute group-hover:translate-x-6 group-hover:translate-y-6 duration-300 transition-all"></div>
            <img
              src="/assets/logo/eduhub-branding.png"
              alt="EduHub Branding Logo"
              className="absolute transform translate-x-6 translate-y-6 h-full w-full object-cover z-[10] block group-hover:-translate-x-0 group-hover:-translate-y-0 group-hover:shadow-lg duration-300 transition-all"
            />
          </div>
          <div className="flex flex-col justify-center max-md:items-center md:basis-1/2">
            <p className="text-base text-primary-500">
              Learning for the sake of mastering
            </p>
            <h2 className="font-primary font-bold text-xl md:text-2xl text-neutral-black mt-2 ">
              About EduHub
            </h2>
            <p className="text-base text-grey-600 mt-6 text-justify">
              At EduHub, we believe in empowering minds, cultivating a deep
              understanding of tech concepts, and fostering practical skills
              that transcend the limitations of conventional education.
            </p>
            <hr className="max-md:hidden lg:hidden border-grey-100 w-full mt-8 translate-y-6" />
            <div className="max-lg:hidden flex flex-col md:flex-row justify-center gap-16 mt-10">
              <div className="flex flex-col gap-6">
                <img
                  src="/assets/icon/mission-icon.svg"
                  alt="EduHub Mission Icon"
                  width="48px"
                  height="48px"
                />
                <p className="text-justify text-grey-800">
                  EduHub empowers global learners with mastery-focused tech
                  education for real-world impact.
                </p>
              </div>
              <div className="flex md:flex-col gap-6">
                <img
                  src="/assets/icon/vision-icon.svg"
                  alt="EduHub Vision Icon"
                  width="48px"
                  height="48px"
                />
                <p className="text-justify text-grey-800">
                  To be the catalyst for transformative tech education,
                  unlocking potential and driving positive change worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="md:hidden border-grey-100 w-full my-6" />
        <div className="lg:hidden flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:mt-16">
          <div className="flex sm:flex-col gap-6">
            <img
              src="/assets/icon/mission-icon.svg"
              alt="EduHub Mission Icon"
              width="48px"
              height="48px"
            />
            <p className="text-justify text-grey-800">
              EduHub empowers global learners with mastery-focused tech
              education for real-world impact.
            </p>
          </div>
          <div className="flex sm:flex-col gap-6">
            <img
              src="/assets/icon/vision-icon.svg"
              alt="EduHub Vision Icon"
              width="48px"
              height="48px"
            />
            <p className="text-justify text-grey-800">
              To be the catalyst for transformative tech education, unlocking
              potential and driving positive change worldwide.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
