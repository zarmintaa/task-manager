const TrashButton = (props) => {
  const deleteTask = () => {
    props.deleteTask(props.id);
  };
  return <button onClick={deleteTask} className="trash-button" />;
};

export default TrashButton;
