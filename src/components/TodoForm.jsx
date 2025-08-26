import React from "react";

function TodoForm() {
  return (
      <section className="todo_form">
        <h2>Adicionar tarefa: </h2>
        <form>
            <input type="text" placeholder="Digite o título..."/>
            <select>
                <option value="" selected>Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal"></option>
                <option value="Estudos"></option>
                <option value="Esporte"></option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
      </section>
)
}

export default TodoForm;
