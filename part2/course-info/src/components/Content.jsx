import Part from "./Part";

function Content({ parts }) {
  return (
    <ul>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </ul>
  );
}
export default Content;
