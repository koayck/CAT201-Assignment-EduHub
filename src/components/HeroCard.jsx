const HeroCard = () => {
  return (
    <section className="max-sm:px-6 max-md:px-8 max-lg:px-9 px-14 max-w-[1200px] mx-auto relative -mt-16">
      <div className="bg-[#ffffff] shadow-lg shadow-blue-100 rounded-3xl px-4 py-10 md:py-12 mx-auto ">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-primary-500 text-base">Redefining Tech Education</p>
            <h2 className="font-primary font-medium text-lg md:text-xl text-neutral-black text-center">
              Breaking Away From Traditional Norms
            </h2>
          </div>
        <div className="flex gap-6 md:gap-14">
            <div className="flex flex-col items-center text-base basis-1/2 gap-4 ">
              <i className="text-primary-600 text-[32px] md:text-[40px] fa-solid fa-graduation-cap"></i>
              <p className="text-base text-grey-400 md:text-lg text-center break-before-auto max-sm:w-[10ch] sm:min-w-[17ch]">
                <span className="text-accent-700">Mastery</span> over grade
              </p>
            </div>
            <div className="flex flex-col items-center text-base basis-1/2 gap-4">
              <i className="text-primary-600 text-[32px] md:text-[40px] fa-solid fa-clock"></i>
              <p className="text-base text-grey-400 md:text-lg text-center max-sm:w-[10ch] sm:min-w-[17ch]">
                <span className="text-accent-700">Flexible</span> study hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;