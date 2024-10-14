import "../App.css";
import InputItem from "./InputItem";

export default function PersonalDetails({ content, handleContent }) {
  const handleChange = (event) => {
    handleContent({ ...content, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h2>Personal Details</h2>
      <div className="container">
        <InputItem
          title="Full Name"
          type="name"
          name="name"
          placeholder="First and last name"
          value={content.name}
          handleChange={handleChange}
        />
        <InputItem
          title="Email"
          type="email"
          name="email"
          placeholder="Enter email"
          value={content.email}
          handleChange={handleChange}
        />
        <InputItem
          title="Phone Number"
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={content.phone}
          handleChange={handleChange}
        />
        <InputItem
          title="Address"
          type="address"
          name="address"
          placeholder="Enter address"
          value={content.address}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}
