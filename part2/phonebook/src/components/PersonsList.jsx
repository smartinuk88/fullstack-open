import React from "react";

function PersonsList({ persons }) {
  return (
    <div>
      {persons.map((person) => (
        <React.Fragment key={person.name}>
          <p>{person.name}</p>
          <p>{person.number}</p>
        </React.Fragment>
      ))}
    </div>
  );
}
export default PersonsList;
