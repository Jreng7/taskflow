import { useState } from "react";
import "./App.css";
import Todos from "./Components/Todo";

const arrayTasks = [
  { name: "Limpar a casa e depois estudar inglês para poder treinar conversação.", status: true },
  { name: "Comprar cadeira gamer", status: false },
]


function App() {

  const [todo, setTodo] = useState([])

  return (
    <>
      <main className="container">
        <header className="title">
          <h2>Minhas Tarefas</h2>
        </header>

        <Todos dados={arrayTasks}></Todos>

        <input className="inputName" />
        <button className="newTaskButton">Nova Tarefa</button>
      </main>
    </>
  );
}

export default App;
