import "../App.css";
import { deleteTodo as apiDelete } from '../service/api.js'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const Todos = ({ dados }) => {

  async function deleteTodo(id) {
    try {
      await apiDelete(id)
    } catch (err) {
      console.error('Falha ao deletar:', err)
    }
  }

  return (
    <div className="todos">
      {dados.map((itemPercorrido) => {
        return (
          <div className="todo" key={itemPercorrido.id}>
            
            <button className="checkbox" style={{backgroundColor: itemPercorrido.status ? "chocolate " : "white", }}></button>
            <p>{itemPercorrido.name}</p>

            <button className="btn1">
              <AiOutlineEdit></AiOutlineEdit>
            </button>
            <button onClick={() => deleteTodo(itemPercorrido.id)} className="btn2">
              <AiOutlineDelete></AiOutlineDelete>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
