import "./App.css";
import Todos from "./Components/Todo";
import { getTodos, createTodo } from "./service/api";
import { useEffect, useState } from "react";

function App() {

  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [inputVisibily, setInputVisibility] = useState(false)

  function handleNewButton(){
    setInputVisibility(!inputVisibily);
  }

  const handleCreateTodo = async () => {
    const newTodo = await createTodo({ name: inputValue });
    setTodos([...todos, newTodo]); 
    setInputValue(''); 
    setInputVisibility(false);
  }

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

        <input className="inputName" 
          value={inputValue} 
          onChange={(event) => {setInputValue(event.target.value)}}
          style={ {display: inputVisibily ? "block" : "none"} } 
        />
        <button onClick={inputVisibily ? handleCreateTodo : handleNewButton} className="newTaskButton">
          {inputVisibily ? 'Confirmar' : 'Add Tarefa'}
        </button>
      </main>
    </>
  );
}

export default App
