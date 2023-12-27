import Section from "./layout/Section";

const Video = () => {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center">
        <h2
          className="text-xl md:text-2xl font-primary font-bold text-neutral-black text-center w-fit"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          EduHub In Action
        </h2>
        <p
          className="mt-2 max-sm:text-center text-base text-grey-400 font-primary"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Get a glimpse of how EduHub is transforming tech education.          
        </p>
      </div>
      <div className="flex">
      <iframe width="320" src="https://www.youtube.com/embed/pM2YgautA00?si=TL2AP2h55e8NozG1&autoplay=1" title="EduHub Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="mt-12 md:mt-14 w-full sm:mx-auto aspect-video" data-aos="fade-up" data-aos-delay="200"></iframe>
          {/* <iframe
            src="https://drive.google.com/file/d/16xHj2iCxomD498-Af90H6ytu1eGS2IwB/preview?start=1"
            allow="autoplay"
            allowFullScreen
            width="320"
            className="mt-12 md:mt-14 w-full sm:mx-auto aspect-video"
          /> */}
      </div>
    </Section>
  );
};

export default Video;
