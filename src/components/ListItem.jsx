export default function ListItem({ index, title, onClick }) {
  return (
    <button
      onClick={() => onClick(index)}
      className="w-full p-1 border-b-2 border-gray-50 hover:border-blue-500 text-start text-lg font-medium transition-colors"
    >
      {title}
    </button>
  );
}
