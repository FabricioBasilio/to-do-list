import TodoForm from "./TodoForm";
import Search from "./Search";
import Filter from "./Filter";
import CheckboxModalRemove from "./CheckboxModalRemove";

function TodoContainer({
  filter,
  setFilter,
  filterCategory,
  setFilterCategory,
  sort,
  setSort,
  search,
  setSearch,
  setFade,
  setModalForm,
  checkboxModalRemove,
  setCheckboxModalRemove,
  checarTarefas,
  addTodo,
  setModalCategory,
  categories,
}) {
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Filter
        filter={filter}
        setFilter={setFilter}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />
      <CheckboxModalRemove
        checkboxModalRemove={checkboxModalRemove}
        setCheckboxModalRemove={setCheckboxModalRemove}
      />
      <Search search={search} setSearch={setSearch} />
      <section className="todo_list">{checarTarefas()}</section>
      <TodoForm
        addTodo={addTodo}
        setFade={setFade}
        setModalForm={setModalForm}
        setModalCategory={setModalCategory}
        categories={categories}
      />
    </div>
  );
}

export default TodoContainer;
