import { useState } from "react";
import "./styles/App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Fazer projeto todo list",
      category: "Trabalho",
      isDone: false,
    },
    {
      id: 2,
      text: "Fazer projeto com React",
      category: "Trabalho",
      isDone: false,
    },
    {
      id: 3,
      text: "Ir à academia",
      category: "Pessoal",
      isDone: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  function addTodo(text, category) {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isDone: false,
      },
    ];

    setTodos(newTodos);
  }

  function removeTodo(id) {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );

    setTodos(filteredTodos);
  }

  function completeTodo(id) {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isDone = !todo.isDone) : todo
    );

    setTodos(newTodos);
  }

  function filtrarTarefas(todo) {
    return filter === "All"
      ? true
      : filter === "Done"
      ? todo.isDone
      : !todo.isDone;
  }

  function pesquisarTarefas(todo) {
    return todo.text.toLowerCase().includes(search.toLowerCase());
  }

  function ordenarAlfabeticamente(a, b) {
    return sort === "Asc"
      ? a.text.localeCompare(b.text)
      : b.text.localeCompare(a.text);
  }

  function colocarTarefas(todo) {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    );
  }

  function checarTarefas() {
    // Quando há 0 tarefas
    return todos.length === 0 ? (
      <p className="todo_list__feedback">
        Nenhuma tarefa aqui, tenha um bom dia :D
      </p>
    ) : (
      todos
        .filter(filtrarTarefas)
        .filter(pesquisarTarefas)
        .sort(ordenarAlfabeticamente)
        .map(colocarTarefas)
    );
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Filter
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <Search search={search} setSearch={setSearch} />
      <section className="todo_list">{checarTarefas()}</section>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
