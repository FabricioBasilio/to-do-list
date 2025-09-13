import { useState } from "react";
import Options from "./Options";
import CharacterCounter from "./CharacterCounter";

function TodoForm({
  addTodo,
  setFade,
  setModalForm,
  setModalCategory,
  categories,
}) {
  const charactersLimit = 100;

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  function abrirModalCategory() {
    setFade(true);
    setModalCategory(true);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!value.trim() || !category) {
      setFade(true);
      setModalForm(true);
      return;
    }

    addTodo(value.trim(), category);

    resetInputs();
  }

  function resetInputs() {
    setValue("");
    setCategory("");
  }

  return (
    <section className="todo_form">
      <h2>Adicionar tarefa: </h2>
      <form className="todo_form__form" onSubmit={handleFormSubmit}>
        <label htmlFor="texto_adicionar_tarefa">O que fazer:</label>
        <input
          type="text"
          maxLength={charactersLimit}
          placeholder="Digite a tarefa..."
          value={value}
          id="texto_adicionar_tarefa"
          onChange={(e) => setValue(e.target.value)}
        />
        <CharacterCounter valueLength={value.length} limit={charactersLimit} />
        <label htmlFor="categoria_adicionar_tarefa">Categoria:</label>
        <select
          value={category}
          id="categoria_adicionar_tarefa"
          onChange={(e) => setCategory(e.target.value)}
        >
          <Options categories={categories} />
        </select>
        <button type="button" onClick={abrirModalCategory}>
          Adicionar categoria
        </button>
        <button type="submit" disabled={!value.trim() || !category}>Criar tarefa</button>
      </form>
    </section>
  );
}

export default TodoForm;
