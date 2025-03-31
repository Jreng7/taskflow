import "../App.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const Todos = ({ dados }) => {
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
            <button className="btn2">
              <AiOutlineDelete></AiOutlineDelete>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
