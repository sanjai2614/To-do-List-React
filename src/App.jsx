import React, { useState } from 'react'

const App = () => {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  // add
  const addTodo = () => {
    if (todo.trim() === '') return;
    setTodoList([...todoList, { id: crypto.randomUUID(), text: todo, completed: false }])
    setTodo('')
  }

  //toggle click
  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((item) => item.id === id ? { ...item, completed: !item.completed } : item)
    )
  }

  // delete
  const deleteTodo = (id) => {
    setTodoList(
      todoList.filter((item) => item.id !== id)
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-200 flex items-center justify-center px-4">

      <div className="bg-white shadow-2xl rounded-2xl p-6 w-fIt max-w-md">

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          📝 To-Do List
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            className="flex-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            onClick={addTodo}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
          >
            Add
          </button>
        </div>

        {/* Empty State */}
        {todoList.length === 0 && (
          <p className="text-center text-gray-500">No tasks yet 🚀</p>
        )}

        {/* Todo List */}
        <ul className="space-y-3">
          {todoList.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span
                onClick={() => toggleComplete(item.id)}
                className={`cursor-pointer flex-1 ${item.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-800'
                  }`}
              >
                {item.text}
              </span>

              <button
                onClick={() => deleteTodo(item.id)}
                className="ml-3 text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default App
