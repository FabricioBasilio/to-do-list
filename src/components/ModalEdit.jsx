import { useEffect, useState } from "react";

function ModalEdit({ setFade, setModalEdit, todoEditId, todos, setTodos }) {
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
    const newTodos = [...todos];

    const newTodosUpdated = newTodos.map((todo) => {
      if (todo.id === todoEditId) {
        return {
          ...todo,
          text: todoToEditText,
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
        rows={"5"}
        onChange={(e) => mudarTexto(e)}
      ></textarea>

      <div className="modal_edit__buttons">
        <button onClick={descartarEdicao}>Descartar</button>
        <button onClick={reescreverEdicao}>Reescrever</button>
      </div>
    </div>
  );
}

export default ModalEdit;
