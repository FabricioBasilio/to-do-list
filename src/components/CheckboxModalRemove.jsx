import { useEffect } from "react";

function CheckboxModalRemove({checkboxModalRemove, setCheckboxModalRemove}) {

  useEffect(() => {
    console.log(checkboxModalRemove);
    
  }, [checkboxModalRemove])

  return (
    <section className="checkbox">
      <input type="checkbox" id="removeTodoCheckbox" className={checkboxModalRemove ? "checkbox--ativo" : ""} onClick={() => setCheckboxModalRemove(!checkboxModalRemove)}/>
      <span className={checkboxModalRemove ? "checkbox--ativo" : ""} onClick={() => setCheckboxModalRemove(!checkboxModalRemove)}></span>
      <label htmlFor="removeTodoCheckbox">Perguntar antes de remover</label>
    </section>
  );
}

export default CheckboxModalRemove;
