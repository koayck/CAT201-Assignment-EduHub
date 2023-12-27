import React from "react";
import Section from "./layout/Section";
import TeamList from "../data/team.json";

const Team = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <Section>
        <div className="flex flex-col justify-center max-md:items-center">
          <h2 className="text-xl md:text-2xl font-primary font-bold text-neutral-black text-center w-fit" data-aos="fade-up" data-aos-delay="100">
            Driving Forces Behind EduHub
          </h2>
          <p className="mt-2 max-sm:text-center text-base text-grey-400 font-primary" data-aos="fade-up" data-aos-delay="200">
            Meet the dynamic team driving EduHub's vision for mastery-focused
            tech education.
          </p>
          <div className="mt-10 md:mt-12 flex max-[590px]:flex-wrap gap-x-4 gap-y-8 lg:gap-x-12">
            {TeamList.map((member, index) => (
              <div key={member.name} className="flex flex-col basis-2/5 md:basis-1/5 grow h-max">
                <img src={member.photo} alt={member.name + "Photo"} className="h-full object-cover grow" data-aos="fade-right" data-aos-delay={index*200}/>
                <p className="text-sm font-medium text-grey-600 mt-4" data-aos="fade-left" data-aos-delay={index*200}>
                  {member.position}
                </p>
                <p className="font-bold text-black text-base  mt-1" data-aos="fade-left" data-aos-delay={index*250}>{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
});

export default Team;