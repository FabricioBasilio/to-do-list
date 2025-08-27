import React from "react";

function Todo({ todo }) {
  return (
    <section className="todo_list__todo">
      <div className="todo_list__todo__content">
        <p>{todo.text}</p>
        <p className="content__category"> - ({todo.category})</p>
      </div>
      <div>
        <button className="buttons__complete_button">Completar</button>
        <button className="buttons__remove_button">Remover</button>
      </div>
    </section>
  );
}

export default Todo;
