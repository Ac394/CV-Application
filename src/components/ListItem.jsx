export default function ListItem({ index, title, onClick }) {
  return <button onClick={() => onClick(index)}>{title}</button>;
}
