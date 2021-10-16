const CheckButton = (props) => {
  const updateTask = () => {
    props.updateTask(props.id);
  };
  return <button onClick={updateTask} className="check-button" />;
};

export default CheckButton;
