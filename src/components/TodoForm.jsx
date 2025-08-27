import { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    alert(value + category)
    if (!value || !category) return;
    addTodo(value, category)

    resetInputs();
  }

  function resetInputs() {
    setValue("")
    setCategory("")
  }



  return (
      <section className="todo_form">
        <h2>Adicionar tarefa: </h2>
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Digite o título..." value={value} onChange={e => setValue(e.target.value)}/>
            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
                <option value="Esporte">Esporte</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
      </section>
)
}

export default TodoForm;
