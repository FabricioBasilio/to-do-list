import { useState } from "react";
import "./styles/App.css";
import Todo from "./components/Todo";
import Fade from "./components/Fade";
import ModalForm from "./components/ModalForm";
import TodoContainer from "./components/TodoContainer";
import ModalRemove from "./components/ModalRemove";

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
  const [fade, setFade] = useState(false);
  const [modalForm, setModalForm] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);
  const [userRemoveAnswer, setUserRemoveAnswer] = useState(false);

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
    setFade(true);
    setModalRemove(true);

    console.log("No removeTodo: " + userRemoveAnswer);
    

    if (userRemoveAnswer === true) {
      const newTodos = [...todos];
      const filteredTodos = newTodos.filter((todo) =>
        todo.id !== id ? todo : null
      );

      setTodos(filteredTodos);

      setUserRemoveAnswer(false);
    }
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

  function mostrarModalForm() {
    if (fade && modalForm) {
      return (
        <>
          <Fade />
          <ModalForm setFade={setFade} setModalForm={setModalForm} />
        </>
      );
    } else return <></>;
  }

  function mostrarModalRemove() {
    if (fade && modalRemove) {
      return (
        <>
          <Fade />
          <ModalRemove
            setFade={setFade}
            setModalRemove={setModalRemove}
            setUserRemoveAnswer={setUserRemoveAnswer}
            
          />
        </>
      );
    } else return <></>;
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
    <>
      <TodoContainer
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        search={search}
        setSearch={setSearch}
        setFade={setFade}
        setModalForm={setModalForm}
        checarTarefas={checarTarefas}
        addTodo={addTodo}
      />
      {mostrarModalForm()}
      {mostrarModalRemove()}
    </>
  );
}

export default App;
