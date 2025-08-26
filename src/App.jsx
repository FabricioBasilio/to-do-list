import { useState } from 'react'
import './styles/App.css'

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
      id: 1,
      text: "Ir à academia",
      category: "Pessoal",
      isDone: false
    },
  ])

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <section className="todo_list">
        {todos.map(({text, category}) => (
          <section className='todo_list__todo'>
            <div className='todo_list__todo__content'>
              <p>{text}</p>
              <p className='content__category'> - ({category})</p>
            </div>
            <div>
              <button>Completar</button>
              <button>Remover</button>
            </div>
          </section>
        ))}
      </section>
    </div>
  )
}

export default App
