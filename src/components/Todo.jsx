import React from "react";

function Todo({ todo, completeTodo, removeTodo }) {
  return (
    <section className={todo.isDone ? "todo_list__todo todo_list__todo--done" : "todo_list__todo"}>
      <div className="todo_list__todo__content">
        <p>{todo.text}</p>
        <p className="content__category">#{todo.category}</p>
      </div>
      <section className="todo_list__todo__buttons">
        <button className="buttons__complete_button" onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className="buttons__remove_button" onClick={() => removeTodo(todo.id)}>Remover</button>
      </section>
    </section>
  );
}

export default Todo;
