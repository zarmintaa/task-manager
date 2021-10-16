import Container from "../../layout/Container";
import TrashButton from "../button/TrashButton";
import UndoButton from "../button/UndoButton";

const FinishedTodo = (props) => {
  return (
    <Container>
      <h2 className="container-header">Yang sudah dilakukan</h2>
      <div className="list-item" id="completed-todos">
        {props.todos.map((item) => (
          <div key={item.id} className="item shadow">
            <div className="inner">
              <h2>{item.task}</h2>
              <p>{item.timestamp}</p>
            </div>
            <UndoButton
              id={item.id}
              updateTaskToUnfinished={props.updateTaskToUnfinished}
            />
            <TrashButton id={item.id} deleteTask={props.deleteTask} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FinishedTodo;
