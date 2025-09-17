import { useEffect, useState } from "react";
import CharacterCounter from "./CharacterCounter";
import Options from "./Options";

function ModalEdit({
  setFade,
  setModalEdit,
  todoEditId,
  todos,
  setTodos,
  categories,
  modalEditTextarea,
}) {
  const todoSuggestions = [
    "Limpar a casa...",
    "Aprender um idioma...",
    "Aprender a desenhar...",
    "Passear no parque...",
    "Ir à academia...",
    "Cozinhar uma receita...",
  ];

  const todoSuggestion =
    todoSuggestions[Math.floor(Math.random() * todoSuggestions.length)];

  const charactersLimit = 100;

  const [todoToEditText, setTodoToEditText] = useState("");
  const [todoToEditCategory, setTodoToEditCategory] = useState("");

  useEffect(() => {
    const newTodos = [...todos];
    const [todoToEdit] = newTodos.filter((todo) => todo.id === todoEditId);
    setTodoToEditText(todoToEdit.text);
    setTodoToEditCategory(todoToEdit.category);
    console.log(todoToEdit);
  }, [todos, todoEditId]);

  function descartarEdicao() {
    setTodoToEditText("");
    setTodoToEditCategory("");
    setFade(false);
    setModalEdit(false);
  }

  function reescreverEdicao() {
    if (!todoToEditText.trim() || !todoToEditCategory) {
      return;
    }

    const newTodos = [...todos];

    const newTodosUpdated = newTodos.map((todo) => {
      if (todo.id === todoEditId) {
        return {
          ...todo,
          text: todoToEditText.trim(),
          category: todoToEditCategory,
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
        placeholder={todoSuggestion}
        defaultValue={todoToEditText}
        maxLength={charactersLimit}
        rows={"5"}
        id="input_edicao"
        ref={modalEditTextarea}
        onChange={(e) => mudarTexto(e)}
      ></textarea>
      <CharacterCounter
        valueLength={todoToEditText.length}
        limit={charactersLimit}
      />
      <select
        value={todoToEditCategory}
        id="categoria_editar_tarefa"
        onChange={(e) => setTodoToEditCategory(e.target.value)}
      >
        <Options categories={categories} />
      </select>
      <div className="modal_edit__buttons">
        <button onClick={descartarEdicao}>Descartar</button>
        <button
          disabled={!todoToEditText.trim() || !todoToEditCategory}
          onClick={reescreverEdicao}
        >
          Reescrever
        </button>
      </div>
    </div>
  );
}

export default ModalEdit;
