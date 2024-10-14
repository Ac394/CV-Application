import EducationForm from "./EducationForm";
import ListItem from "./ListItem";
import { useState } from "react";

const defaultEducation = {
  school: "",
  degree: "",
  startDate: "",
  endDate: "",
  location: "",
};

export default function EducationSection() {
  const [educationDetails, setEducationDetails] = useState([
    {
      school: "ABC College",
      degree: "BA",
      startDate: "02/12/2024",
      endDate: "01/05/2024",
      location: "At",
    },
    {
      school: "City College",
      degree: "MA",
      startDate: "02/07/2010",
      endDate: "20/01/2011",
      location: "To",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = (event) => {
    //  Copy old values
    const updatedEducation = [...educationDetails];

    // Update the value of the object inside the array
    updatedEducation[activeIndex] = { ...updatedEducation[activeIndex], [event.target.name]: event.target.value };

    // Replace state with the updated array
    setEducationDetails(updatedEducation);
  };

  const handleDelete = () => {
    setEducationDetails(educationDetails.filter((item, index) => index !== activeIndex));

    setActiveIndex(null);
  };

  const handleAdd = () => {
    setEducationDetails([...educationDetails, defaultEducation]);

    setActiveIndex(educationDetails.length);
  };

  if (typeof activeIndex === "number") {
    return (
      <>
        <EducationForm education={educationDetails[activeIndex]} handleChange={handleChange} />
        <div>
          <button onClick={() => handleDelete()}>Delete</button>
          <button onClick={() => setActiveIndex(null)}>Done</button>
        </div>
      </>
    );
  } else
    return (
      <>
        {educationDetails.map((education, index) => (
          <ListItem key={index} index={index} title={education.school} onClick={setActiveIndex} />
        ))}
        <button onClick={() => handleAdd()}>Add Education</button>
      </>
    );
}
