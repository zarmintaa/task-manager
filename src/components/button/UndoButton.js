const UndoButton = (props) => {
  const unfinishedTask = () => {
    props.updateTaskToUnfinished(props.id);
  };
  return <button onClick={unfinishedTask} className="undo-button" />;
};

export default UndoButton;
