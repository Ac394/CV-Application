export default function EducationResume({ education }) {
  return (
    <div>
      <div>
        <p>
          {education.startDate} - {education.endDate}
        </p>
        <p>{education.location}</p>
      </div>
      <div>
        <p>{education.school}</p>
        <p>{education.degree}</p>
      </div>
    </div>
  );
}
