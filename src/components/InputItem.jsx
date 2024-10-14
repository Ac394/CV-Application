export default function InputItem({
  title = "",
  type = "text",
  name = "",
  placeholder = "",
  value = "",
  handleChange,
}) {
  return (
    <label className="label-container">
      {title}
      {type === "textarea" ? (
        <textarea name={name} placeholder={placeholder} value={value} onChange={handleChange} />
      ) : (
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange} />
      )}
    </label>
  );
}
