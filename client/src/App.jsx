import "./App.css";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const arrayTasks = [
  { name: "Limpar a casa"},
  { name: "Comprar cadeira gamer"},
]

const Todos = ({ dados }) => {
  return (
    <div className="todos">
      {dados.map(itemPercorrido => {
        return (
          <div className="todo">
            <p>{itemPercorrido.name}</p>
            <button className="btn1"><AiOutlineEdit></AiOutlineEdit></button>
            <button className="btn2"><AiOutlineDelete></AiOutlineDelete></button>
          </div>
        )
      })}
    </div>
  )
}


function App() {
  return (
    <>
      <main className="container">
        <Todos dados={arrayTasks}></Todos>
      </main>
    </>
  );
}

export default App;
