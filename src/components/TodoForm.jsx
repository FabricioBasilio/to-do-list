import { useState } from "react";

function TodoForm({ addTodo, setFade, setModalForm }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!value || !category) {
      setFade(true)
      setModalForm(true)
      return;
    }
    // abrir o modal avisando os negocio




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
        <form className="todo_form__form" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Digite a tarefa..." value={value} onChange={e => setValue(e.target.value)}/>
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
