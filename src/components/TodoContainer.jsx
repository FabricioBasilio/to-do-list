import TodoForm from "./TodoForm";
import Search from "./Search";
import Filter from "./Filter";

function TodoContainer({filter, setFilter, sort, setSort, search, setSearch, setFade, setModalForm, checarTarefas, addTodo}) {
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
      <TodoForm addTodo={addTodo} setFade={setFade} setModalForm={setModalForm} />
    </div>
  )
}

export default TodoContainer