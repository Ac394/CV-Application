export default function ExperienceResume({ experience }) {
  return (
    <div>
      <div>
        <p>
          {experience.startDate} - {experience.endDate}
        </p>
        <p>{experience.location}</p>
      </div>
      <div>
        <p>{experience.company}</p>
        <p>{experience.position}</p>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}
