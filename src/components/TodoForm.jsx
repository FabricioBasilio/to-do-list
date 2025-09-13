import { useState } from "react";
import Options from "./Options";

function TodoForm({ addTodo, setFade, setModalForm }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const [categories, setCategories] = useState([
    {
      id: Math.floor(Math.random() * 100),
      categoryName: "Pessoal",
    },
    {
      id: Math.floor(Math.random() * 100),
      categoryName: "Estudos",
    },
    {
      id: Math.floor(Math.random() * 100),
      categoryName: "Trabalho",
    },
    {
      id: Math.floor(Math.random() * 100),
      categoryName: "Esporte",
    },
  ]);

  // function addCategory(categoryName) {
  //   const newCategories = [
  //     ...categories,
  //     {
  //       id: Math.floor(Math.random() * 100),
  //       categoryName: categoryName,
  //     },
  //   ];

  //   setCategories(newCategories);
  // }

  // addCategory("")

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
          <Options categories={categories} />
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </section>
  );
}

export default TodoForm;
