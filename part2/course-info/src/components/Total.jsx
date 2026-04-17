function Total({ parts }) {
  const total = parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <p>
      Total of {total} {total === 1 ? "exercise" : "exercises"}
    </p>
  );
}
export default Total;
