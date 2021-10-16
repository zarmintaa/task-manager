import Container from "../../layout/Container";
import CheckButton from "../button/CheckButton";

const UnfinishedTodo = (props) => {
  return (
    <Container>
      <h2 className="container-header">Yang harus dilakukan</h2>
      <div className="list-item" id="todos">
        {props.todos.map((item) => (
          <div key={item.id} className="item shadow">
            <div className="inner">
              <h2>{item.task}</h2>
              <p>{item.timestamp}</p>
            </div>
            <CheckButton id={item.id} updateTask={props.updateTask} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default UnfinishedTodo;
