import { useContext, useState } from "react";
import TaskContext from "../../store/task-context";
import {
  Form,
  FormGroup,
  Input,
  InputSubmit,
  Label,
} from "../form/form-component";

const TaskForm = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const ctx = useContext(TaskContext);

  const taskInputHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const taskDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const taskData = {
      id: +new Date(),
      task: enteredTask,
      timestamp: enteredDate,
      isCompleted: false,
    };

    ctx.onAddTask(taskData);
    setEnteredTask("");
    setEnteredDate("");
  };

  return (
    <Form onSubmit={submitHandler} action="#" id="form">
      <FormGroup>
        <Label htmlFor="title">Masukkan hal yang akan dilakukan</Label>
        <Input
          onChange={taskInputHandler}
          type="text"
          id="title"
          name="title"
          required
          value={enteredTask}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="date">Masukkan tanggal harus selesai</Label>
        <Input
          onChange={taskDateHandler}
          value={enteredDate}
          type="date"
          id="date"
          name="date"
          required
        />
      </FormGroup>
      <InputSubmit type="submit" value="Submit" name="Submit" />
    </Form>
  );
};

export default TaskForm;
