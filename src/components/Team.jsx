import React from "react";
import Section from "./layout/Section";
import TeamList from "../data/team.json";

const Team = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-white relative" id="team">
      <Section>
        <div className="flex flex-col justify-center max-md:items-center">
          <h2 className="text-xl md:text-2xl font-primary font-bold text-neutral-black text-center w-fit">
            Driving Forces Behind EduHub
          </h2>
          <p className="mt-2 max-sm:text-center text-base md:text-lg text-grey-400 font-primary">
            Meet the dynamic team driving EduHub's vision for mastery-focused
            tech education.
          </p>
          <div className="mt-10 md:mt-12 flex max-[590px]:flex-wrap gap-x-4 gap-y-8 lg:gap-x-12">
            {TeamList.map((member) => (
              <div key={member.name} className="flex flex-col basis-2/5 md:basis-1/5 grow h-max">
                <img src={member.photo} alt={member.name + "Photo"} className="h-full object-cover grow" />
                <p className="text-sm font-medium text-grey-600 mt-4">
                  {member.position}
                </p>
                <p className="font-bold text-black text-base  mt-1">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
});

export default Team;