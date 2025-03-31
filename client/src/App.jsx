import "./App.css";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const arrayTasks = [
  { name: "Limpar a casa e depois estudar inglês para poder treinar conversação.", status: true },
  { name: "Comprar cadeira gamer", status: false },
]

const Todos = ({ dados }) => {
  return (
    <div className="todos">
      {dados.map(itemPercorrido => {
        return (
          <div className="todo">
            <button className="checkbox" style={ {backgroundColor: itemPercorrido.status ? 'chocolate ' : 'white' } }></button>
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
        <header className="title">
          <h2>Minhas Tarefas</h2>
        </header>
        <Todos dados={arrayTasks}></Todos>
      </main>
    </>
  );
}

export default App;
