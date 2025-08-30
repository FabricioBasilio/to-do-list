function CheckboxModalRemove({checkboxModalRemove, setCheckboxModalRemove}) {
  return (
    <section className="checkbox">
      <input type="checkbox" id="removeTodoCheckbox" onClick={() => setCheckboxModalRemove(!checkboxModalRemove)}/>
      <label htmlFor="removeTodoCheckbox">Perguntar antes de remover</label>
    </section>
  );
}

export default CheckboxModalRemove;
