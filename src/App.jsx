import { useState } from 'react'
import './styles/App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'


function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Fazer projeto todo list", 
      category: "Trabalho",
      isDone: false
    },
    {
      id: 2,
      text: "Fazer projeto com React",
      category: "Trabalho",
      isDone: false
    },
    {
      id: 3,
      text: "Ir à academia",
      category: "Pessoal",
      isDone: false
    },
  ])

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")


function addTodo(text, category) {
  const newTodos = [
    ...todos,
    {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isDone: false
    }
  ]

  setTodos(newTodos)
}

function removeTodo(id) {
  const newTodos = [...todos]
  const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null)

  setTodos(filteredTodos)
}

function completeTodo(id) {
  const newTodos = [...todos]
  newTodos.map(todo => todo.id === id ? todo.isDone = !todo.isDone : todo)

  setTodos(newTodos)
}



  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter}/>
      <section className="todo_list">
        {todos
        .filter(todo => filter === "All" ? true : filter === "Done" ? todo.isDone : !todo.isDone)
        .filter(todo => todo.text.toLowerCase().includes(search.toLowerCase())).map(todo => (
          <Todo key={todo.id} todo={ todo } completeTodo={ completeTodo } removeTodo={ removeTodo }/>
        ))}
      </section>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
