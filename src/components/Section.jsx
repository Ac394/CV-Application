import ListItem from "./ListItem";
import { useState } from "react";

export default function Section({ content, handleContent, defaultContent, Form, title }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = (event) => {
    //  Copy old values
    const updatedContent = [...content];

    // Update the value of the object inside the array
    updatedContent[activeIndex] = { ...updatedContent[activeIndex], [event.target.name]: event.target.value };

    // Replace state with the updated array
    handleContent(updatedContent);
  };

  const handleDelete = () => {
    handleContent(content.filter((item, index) => index !== activeIndex));

    setActiveIndex(null);
  };

  const handleAdd = () => {
    handleContent([...content, defaultContent]);

    setActiveIndex(content.length);
  };

  return (
    <div>
      <h2>{title}</h2>
      {typeof activeIndex === "number" ? (
        <>
          <Form content={content[activeIndex]} handleChange={handleChange} />
          <div>
            <button onClick={() => handleDelete()}>Delete</button>
            <button onClick={() => setActiveIndex(null)}>Done</button>
          </div>
        </>
      ) : (
        <>
          {content.map((details, index) => (
            <ListItem key={index} index={index} title={Object.values(details)[0]} onClick={setActiveIndex} />
          ))}
          <button onClick={() => handleAdd()}>Add {title}</button>
        </>
      )}
    </div>
  );
}
