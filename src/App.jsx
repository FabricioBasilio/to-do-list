import { useEffect, useRef, useState } from "react";
import "./styles/App.css";
import Todo from "./components/Todo";
import Fade from "./components/Fade";
import ModalForm from "./components/ModalForm";
import TodoContainer from "./components/TodoContainer";
import ModalRemove from "./components/ModalRemove";
import ModalEdit from "./components/ModalEdit";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.floor(Math.random() * 10000),
      text: "melhorar projeto",
      category: "eu sei la",
      isDone: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [fade, setFade] = useState(false);
  const [modalForm, setModalForm] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [userRemoveAnswer, setUserRemoveAnswer] = useState(false);
  const [todoRemoveId, setTodoRemoveId] = useState("");
  const [checkboxModalRemove, setCheckboxModalRemove] = useState(false);

  const modalFormButton = useRef(null);
  const modalRemoveNotButton = useRef(null);

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
    setTodoRemoveId(id);

    if (checkboxModalRemove === true) {
      setFade(true);
      setModalRemove(true);
    } else deleteTodo(id);
  }

  useEffect(() => {
    if (userRemoveAnswer) deleteTodo(todoRemoveId);
  }, [userRemoveAnswer, todoRemoveId]);

  useEffect(() => {
    if (modalRemove) modalRemoveNotButton.current.focus();

    if (modalForm) modalFormButton.current.focus();
  }, [modalForm, modalRemove]);

  function deleteTodo(id) {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );

    setTodos(filteredTodos);

    setUserRemoveAnswer(false);

    setTodoRemoveId("");
  }

  function completeTodo(id) {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isDone = !todo.isDone) : todo
    );

    setTodos(newTodos);
  }

  function editTodo(id) {
    setFade(true);
    setModalEdit(true);
    console.log("editar todo do id: " + id);
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
        editTodo={editTodo}
        removeTodo={removeTodo}
      />
    );
  }

  function mostrarModalForm() {
    if (fade && modalForm) {
      return (
        <>
          <Fade />
          <ModalForm
            setFade={setFade}
            setModalForm={setModalForm}
            modalFormButton={modalFormButton}
          />
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
            modalRemoveNotButton={modalRemoveNotButton}
          />
        </>
      );
    } else return <></>;
  }

  function mostrarModalEdit() {
    if (fade && modalEdit) {
      return (
        <>
          <Fade />
          <ModalEdit setFade={setFade} setModalEdit={setModalEdit} />
        </>
      );
    } else return <></>;
  }

  function checarTarefas() {
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
    <main>
      <TodoContainer
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        search={search}
        setSearch={setSearch}
        setFade={setFade}
        setModalForm={setModalForm}
        checkboxModalRemove={checkboxModalRemove}
        setCheckboxModalRemove={setCheckboxModalRemove}
        checarTarefas={checarTarefas}
        addTodo={addTodo}
      />
      {mostrarModalForm()}
      {mostrarModalRemove()}
      {mostrarModalEdit()}
    </main>
  );
}

export default App;
