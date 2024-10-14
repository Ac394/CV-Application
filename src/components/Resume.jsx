import EducationResume from "./EducationResume";
import ExperienceResume from "./ExperienceResume";

export default function Resume({ person, education, experience }) {
  // TODO: Output for final Resume paper
  return (
    <div>
      <div>
        {person.name && <p>{person.name}</p>}
        <div>
          {person.email && <p>{person.email}</p>}
          {person.phone && <p>{person.phone}</p>}
          {person.address && <p>{person.address}</p>}
        </div>
      </div>
      <div>
        <h3>Education</h3>
        {education.map((data, index) => (
          <EducationResume key={index} education={data} />
        ))}
      </div>
      <div>
        <h3>Experience</h3>
        {experience.map((data, index) => (
          <ExperienceResume key={index} experience={data} />
        ))}
      </div>
    </div>
  );
}
