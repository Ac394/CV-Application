export default function EducationResume({ education }) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex flex-col items-start w-48">
        <p>
          {education.startDate} - {education.endDate}
        </p>
        <p>{education.location}</p>
      </div>
      <div className="flex flex-col items-start">
        <p className="font-bold">{education.school}</p>
        <p>{education.degree}</p>
      </div>
    </div>
  );
}
