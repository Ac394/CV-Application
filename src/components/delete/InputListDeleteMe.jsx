import "../App.css";
import InputItem from "./InputItem";

export default function InputList({ title, content }) {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <div className="container">
          {content.map((details, index) => (
            <InputItem
              key={index}
              title={details.title}
              type={details.type}
              name={details.name}
              placeholder={details.placeholder}
              value={details.name}
              currentState={details.state}
              handleChange={details.set}
            />
          ))}
        </div>
      </div>
    </>
  );
}
