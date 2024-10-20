import "./App.css";
import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import Section from "./components/Section";
import EducationForm from "./components/EducationForm";
EducationForm;
import ExperienceForm from "./components/ExperienceForm";
import Resume from "./components/Resume";

const defaultEducation = {
  school: "",
  degree: "",
  startDate: "",
  endDate: "",
  location: "",
};

const defaultExperience = {
  company: "",
  position: "",
  startDate: "",
  endDate: "",
  location: "",
};

function App() {
  const [personalDetails, setPersonalDetails] = useState({ name: "", email: "", phone: "", address: "" });

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

  const [experienceDetails, setExperienceDetails] = useState([
    {
      company: "Megasoft",
      position: "SWE",
      startDate: "02/12/2024",
      endDate: "01/05/2024",
      location: "Lato Palo",
      description: "Successfully supervised various projects for big clients",
    },
  ]);

  return (
    <div className="flex justify-between gap-5">
      <div className="space-y-5">
        <PersonalDetails content={personalDetails} handleContent={setPersonalDetails} />
        <Section
          content={educationDetails}
          handleContent={setEducationDetails}
          defaultContent={defaultEducation}
          Form={EducationForm}
          title={"Education"}
        />
        <Section
          content={experienceDetails}
          handleContent={setExperienceDetails}
          defaultContent={defaultExperience}
          Form={ExperienceForm}
          title={"Experience"}
        />
      </div>

      <Resume person={personalDetails} education={educationDetails} experience={experienceDetails} />
    </div>
  );
}

export default App;
