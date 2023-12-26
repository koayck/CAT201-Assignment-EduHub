import Section from "./layout/Section";

const Video = () => {
  return (
    <Section>
      <div class="flex flex-col justify-center items-center">
        <h2
          className="text-xl md:text-2xl font-primary font-bold text-neutral-black text-center w-fit"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          EduHub In Action
        </h2>
        <p
          className="mt-2 max-sm:text-center text-base md:text-lg text-grey-400 font-primary"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Get a glimpse of how EduHub is transforming tech education.          
        </p>
      </div>
      <div class="flex">
        <iframe
          src="https://drive.google.com/file/d/16xHj2iCxomD498-Af90H6ytu1eGS2IwB/preview?start=1"
          allow="autoplay"
          allowFullScreen
          width="320"
          class="mt-12 md:mt-14 w-full sm:mx-auto aspect-video"
        />
      </div>
    </Section>
  );
};

export default Video;
