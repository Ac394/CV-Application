import "../App.css";
import InputItem from "./InputItem";

export default function EducationForm({ content, handleChange }) {
  return (
    <div className="container">
      <InputItem
        title="School"
        name="school"
        placeholder="School name"
        value={content.school}
        handleChange={handleChange}
      />
      <InputItem
        title="Degree"
        name="degree"
        placeholder="Enter degree"
        value={content.degree}
        handleChange={handleChange}
      />
      <InputItem
        title="Start Date"
        name="startDate"
        placeholder="Enter start date"
        value={content.startDate}
        handleChange={handleChange}
      />
      <InputItem
        title="End Date"
        name="endDate"
        placeholder="Enter end date"
        value={content.endDate}
        handleChange={handleChange}
      />
      <InputItem
        title="Location"
        name="location"
        placeholder="Enter location"
        value={content.location}
        handleChange={handleChange}
      />
    </div>
  );
}
