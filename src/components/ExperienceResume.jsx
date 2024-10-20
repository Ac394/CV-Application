export default function ExperienceResume({ experience }) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex flex-col items-start w-48">
        <p>
          {experience.startDate} - {experience.endDate}
        </p>
        <p>{experience.location}</p>
      </div>
      <div className="flex flex-col items-start">
        <p className="font-bold">{experience.company}</p>
        <p>{experience.position}</p>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}
