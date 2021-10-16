import { useState } from "react";

const TaskForm = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

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

    props.addTask(taskData);
    setEnteredTask("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler} className="form" action="#" id="form">
      <div className="form-group form-title">
        <label className="task" htmlFor="title">
          Masukkan hal yang akan dilakukan
        </label>
        <input
          onChange={taskInputHandler}
          type="text"
          id="title"
          name="title"
          required
          value={enteredTask}
        />
      </div>
      <div className="form-group form-title">
        <label htmlFor="date">Masukkan tanggal harus selesai</label>
        <input
          onChange={taskDateHandler}
          value={enteredDate}
          type="date"
          id="date"
          name="date"
          required
        />
      </div>
      <input
        type="submit"
        value="Submit"
        name="Submit"
        className="btn-submit"
      />
    </form>
  );
};

export default TaskForm;
