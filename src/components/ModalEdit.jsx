import { useEffect, useState } from "react";
import CharacterCounter from "./CharacterCounter";

function ModalEdit({ setFade, setModalEdit, todoEditId, todos, setTodos, modalEditTextarea}) {

  const charactersLimit = 100;

  const [todoToEditText, setTodoToEditText] = useState("");

  useEffect(() => {
    const newTodos = [...todos];
    const [todoToEdit] = newTodos.filter((todo) => todo.id === todoEditId);
    setTodoToEditText(todoToEdit.text);
    console.log(todoToEdit);
  }, [todos, todoEditId]);

  function descartarEdicao() {
    setTodoToEditText("");
    setFade(false);
    setModalEdit(false);
  }

  function reescreverEdicao() {

    if (!todoToEditText.trim()) {
      
      return;
    }


    const newTodos = [...todos];

    const newTodosUpdated = newTodos.map((todo) => {
      if (todo.id === todoEditId) {
        return {
          ...todo,
          text: todoToEditText.trim(),
        };
      } else return todo;
    });

    console.log(newTodosUpdated);
    console.log(todoToEditText);

    setTodos(newTodosUpdated);

    setFade(false);
    setModalEdit(false);
  }

  function mudarTexto(e) {
    setTodoToEditText(e.target.value);
  }

  return (
    <div className="modal_details modal_edit">
      <label htmlFor="input_edicao">
        <p>Editar tarefa</p>
      </label>
      <textarea
        id="input_edicao"
        defaultValue={todoToEditText}
        maxLength={charactersLimit}
        rows={"5"}
        ref={modalEditTextarea} onChange={(e) => mudarTexto(e)}
      ></textarea>
      <CharacterCounter valueLength={todoToEditText.length} limit={charactersLimit}/>
      <div className="modal_edit__buttons">
        <button onClick={descartarEdicao}>Descartar</button>
        <button disabled={!todoToEditText.trim()} onClick={reescreverEdicao}>Reescrever</button>
      </div>
    </div>
  );
}

export default ModalEdit;
