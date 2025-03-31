import "./App.css";
import Todos from "./Components/Todo";
import { getTodos } from "./service/api";
import { useEffect, useState } from "react";

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await getTodos();
      setTodos(response)
    };
    fetchTodos();
  },[])

  return (
    <>
      <main className="container">
        <header className="title">
          <h2>Minhas Tarefas</h2>
        </header>

        <Todos dados={todos}></Todos>

        <input className="inputName" />
        <button className="newTaskButton">Add Tarefa</button>
      </main>
    </>
  );
}

export default App;
