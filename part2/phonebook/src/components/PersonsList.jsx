import React from "react";

function PersonsList({ persons, onDelete }) {
  return (
    <div>
      {persons.map((person) => (
        <p key={person.id}>
          <span>{person.name} </span>

          <span>{person.number} </span>
          <span>
            <button type="button" onClick={() => onDelete(person)}>
              delete
            </button>
          </span>
        </p>
      ))}
    </div>
  );
}
export default PersonsList;
