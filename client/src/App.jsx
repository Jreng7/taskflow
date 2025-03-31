import "./App.css";

const arrayTasks = [
  { name: "Limpar a casa"},
  { name: "Comprar cadeira gamer"},
]

const Todos = ({ tasks }) => {
  return (
    <div className="todos">
      {tasks.map(itemPercorrido => {
        return (
          <div className="todo">
            <p>{itemPercorrido.name}</p>
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
        <Todos tasks={arrayTasks}></Todos>
      </main>
    </>
  );
}

export default App;
