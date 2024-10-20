import EducationResume from "./EducationResume";
import ExperienceResume from "./ExperienceResume";

export default function Resume({ person, education, experience }) {
  // TODO: Output for final Resume paper
  return (
    <div className="w-full bg-white space-y-6">
      <div className="text-white bg-sky-900 px-9 py-6 space-y-8">
        {person.name && <p className="text-3xl">{person.name}</p>}
        <div className="flex justify-center gap-5">
          {person.email && <p>{person.email}</p>}
          {person.phone && <p>{person.phone}</p>}
          {person.address && <p>{person.address}</p>}
        </div>
      </div>
      <div className="px-14 space-y-5">
        <h3 className="bg-gray-100 font-lg font-bold p-1">Education</h3>
        {education.map((data, index) => (
          <EducationResume key={index} education={data} />
        ))}
      </div>
      <div className="px-14 space-y-5">
        <h3 className="bg-gray-100 font-lg font-bold p-1">Experience</h3>
        {experience.map((data, index) => (
          <ExperienceResume key={index} experience={data} />
        ))}
      </div>
    </div>
  );
}
