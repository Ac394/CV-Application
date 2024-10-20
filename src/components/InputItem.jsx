export default function InputItem({
  title = "",
  type = "text",
  name = "",
  placeholder = "",
  value = "",
  handleChange,
}) {
  return (
    <label className="flex flex-col items-start text-lg font-medium gap-1">
      {title}
      {type === "textarea" ? (
        <textarea
          className="w-full min-h-24 text-sm bg-gray-100 rounded-md p-1"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          className="w-full h-9 text-sm font-normal bg-gray-100 rounded-md p-2"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      )}
    </label>
  );
}
