import Container from "../../layout/Container";
import CheckButton from "../button/CheckButton";
import { Item, ListItem } from "../tasks/task-components";

const UnfinishedTodo = (props) => {
  return (
    <Container>
      <h2>Yang harus dilakukan</h2>
      <ListItem>
        {props.todos.map((item) => (
          <Item key={item.id}>
            <div>
              <h2>{item.task}</h2>
              <p>{item.timestamp}</p>
            </div>
            <CheckButton id={item.id} />
          </Item>
        ))}
      </ListItem>
    </Container>
  );
};

export default UnfinishedTodo;
