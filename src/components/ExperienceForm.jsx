import "../App.css";
import InputItem from "./InputItem";

export default function ExperienceForm({ content, handleChange }) {
  return (
    <div className="container">
      <InputItem
        title="Company Name"
        name="company"
        placeholder="Enter Company Name"
        value={content.company}
        handleChange={handleChange}
      />
      <InputItem
        title="Position Title"
        name="position"
        placeholder="Enter Position Title"
        value={content.position}
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
      <InputItem
        title="Description"
        name="description"
        placeholder="Enter description"
        value={content.description}
        handleChange={handleChange}
        type="textarea"
      />
    </div>
  );
}
