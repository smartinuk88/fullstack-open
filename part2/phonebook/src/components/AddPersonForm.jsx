function AddPersonForm({
  onChangeName,
  onChangeNumber,
  onSubmit,
  newName,
  newTelNumber,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">name: </label>
        <input id="name" value={newName} onChange={onChangeName} />
      </div>
      <div>
        <label htmlFor="number">number: </label>
        <input
          id="number"
          type="tel"
          value={newTelNumber}
          onChange={onChangeNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
export default AddPersonForm;
