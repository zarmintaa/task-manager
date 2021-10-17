import Container from "../../layout/Container";
import TrashButton from "../button/TrashButton";
import UndoButton from "../button/UndoButton";
import { Item, ListItem } from "../tasks/task-components";

const FinishedTodo = (props) => {
  return (
    <Container>
      <h2>Yang sudah dilakukan</h2>
      <ListItem>
        {props.todos.map((item) => (
          <Item key={item.id}>
            <div>
              <h2>{item.task}</h2>
              <p>{item.timestamp}</p>
            </div>
            <UndoButton id={item.id} />
            <TrashButton id={item.id} />
          </Item>
        ))}
      </ListItem>
    </Container>
  );
};

export default FinishedTodo;
