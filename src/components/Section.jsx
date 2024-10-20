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
    <div className="flex flex-col items-start bg-white rounded-lg p-5 space-y-4 w-96">
      <h2 className="text-2xl font-bold">{title}</h2>
      {typeof activeIndex === "number" ? (
        <>
          <Form content={content[activeIndex]} handleChange={handleChange} />
          <div className="w-full flex justify-between">
            <button
              onClick={() => handleDelete()}
              className="text-sm text-gray-600 font-medium px-4 py-2 border border-gray-600 rounded-lg"
            >
              Delete
            </button>
            <button
              onClick={() => setActiveIndex(null)}
              className="text-sm text-white font-bold bg-blue-500 px-4 py-2 rounded-lg"
            >
              Done
            </button>
          </div>
        </>
      ) : (
        <>
          {content.map((details, index) => (
            <ListItem key={index} index={index} title={Object.values(details)[0]} onClick={setActiveIndex} />
          ))}
          <button
            onClick={() => handleAdd()}
            className="ml-auto text-sm text-white font-bold bg-blue-500 px-4 py-2 rounded-lg"
          >
            Add {title}
          </button>
        </>
      )}
    </div>
  );
}
