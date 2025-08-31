import { useState } from "react";

function TodoForm({ addTodo, setFade, setModalForm }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!value.trim() || !category) {
      setFade(true);
      setModalForm(true);
      return;
    }

    addTodo(value, category);

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
          placeholder="Digite a tarefa..."
          value={value}
          id="texto_adicionar_tarefa"
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor="categoria_adicionar_tarefa">Categoria:</label>
        <select
          value={category}
          id="categoria_adicionar_tarefa"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
          <option value="Esporte">Esporte</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </section>
  );
}

export default TodoForm;
