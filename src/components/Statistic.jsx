import Section from "./layout/Section";

const Statistic = () => {
  return (
    <Section>
      <div className="flex flex-col justify-center max-md:items-center">
        <h2 className="text-xl md:text-2xl font-primary font-bold text-neutral-black text-center w-fit">
          <span className="text-primary-500">EduHub</span>, But In Numbers
        </h2>
        <p className="mt-2 max-sm:text-center text-base md:text-lg text-grey-400 font-primary">
          Here, it's not just about education, but an{" "}
          <span className="text-grey-900 font-bold">academic revolution</span>.
        </p>
        <div className="mt-12 md:mt-14 flex flex-wrap max-lg:justify-center gap-6 md:gap-x-24 md:gap-y-6 max-sm:mx-4 max-md:mx-10">
          <div className="flex flex-col basis-2/5 grow">
            <p className="text-xl md:text-2xl font-primary font-bold text-neutral-black max-md:text-center">
              1,200+
            </p>
            <p className="text-base md:text-lg font-primary font-medium text-grey-400 max-md:text-center mt-2">
              Courses Offered
            </p>
            <p className="max-md:hidden mt-6 text-grey-600">
              a diverse range of courses, covering a wide spectrum of tech
              topics, ensuring comprehensive skill development for our students
            </p>
          </div>
          <div className="flex flex-col basis-2/5 grow">
            <p className="text-xl md:text-2xl font-primary font-bold text-neutral-black max-md:text-center">
              50K
            </p>
            <p className="text-base md:text-lg font-primary font-medium text-grey-400 max-md:text-center mt-2">
              Global Users
            </p>
            <p className="max-md:hidden mt-6 text-grey-600">
              each number a testament to tech mastery achieved.
            </p>
          </div>
          <div className="flex flex-col basis-2/5 grow">
            <p className="text-xl md:text-2xl font-primary font-bold text-neutral-black max-md:text-center">
              150+
            </p>
            <p className="text-base md:text-lg font-primary font-medium text-grey-400 max-md:text-center mt-2">
              Global Reach
            </p>
            <p className="max-md:hidden mt-6 text-grey-600">
              students from around the world benefits from our flexible and
              innovative tech education platform
            </p>
          </div>
          <div className="flex flex-col basis-2/5 grow">
            <p className="text-xl md:text-2xl font-primary font-bold text-neutral-black max-md:text-center">
              97%
            </p>
            <p className="text-base md:text-lg font-primary font-medium text-grey-400 max-md:text-center mt-2">
              Satisfaction Rate
            </p>
            <p className="max-md:hidden mt-6 text-grey-600">
              most students express high satisfaction with our courses,
              reflecting the effectiveness of our mastery-based learning
              approach.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Statistic;
