import { useEffect, useRef, useState } from "react";
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
      text: "Fazer projeto com react",
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
  //id da tarefa a deletar
  const [todoRemoveId, setTodoRemoveId] = useState("");
  const modalFormButton = useRef(null)

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
    // o id está correto
    
    // não dá update imediato valor certo
    // use effect depois

    setTodoRemoveId(id);

    setFade(true);
    setModalRemove(true);
    

  }

  useEffect(() => {

    if (userRemoveAnswer) deleteTodo(todoRemoveId);
    
    // deleteTodo no array de dependencias ou não, fica esse problema que não interrompe nada no código
  }, [userRemoveAnswer, todoRemoveId])


  useEffect(() => {
    // foco no botao
    if (modalForm === true) {
    console.log(modalFormButton.current);
    modalFormButton.current.focus()
    }
  }, [modalForm])


  function deleteTodo(id) {
    

    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );

    setTodos(filteredTodos);

    

    setUserRemoveAnswer(false);

    setTodoRemoveId("")
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
          <ModalForm setFade={setFade} setModalForm={setModalForm} modalFormButton={modalFormButton}/>
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
            userRemoveAnswer={userRemoveAnswer}
            setUserRemoveAnswer={setUserRemoveAnswer}
            todoRemoveId={todoRemoveId}
            deleteTodo={deleteTodo}
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
        checarTarefas={checarTarefas}
        addTodo={addTodo}
      />
      {mostrarModalForm()}
      {mostrarModalRemove()}
    </main>
  );
}

export default App;
