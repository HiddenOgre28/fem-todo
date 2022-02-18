import React, { useContext } from "react";
import crossIcon from "../assets/icon-cross.svg";
import { TodoContext } from "./TodoContext";

const Task = ({ task }) => {
  const { dispatch } = useContext(TodoContext);

  const handleToggleCompleted = () => {
    dispatch({ type: "toggle-complete-task", payload: { id: task.id } });
  };

  const handleRemove = () => {
    dispatch({ type: "remove-task", payload: { id: task.id } });
  };

  return (
    <div className="Task">
      <button
        className={
          task.completed === true
            ? "Task__checkbox checkbox__checked"
            : "Task__checkbox"
        }
        onClick={handleToggleCompleted}
      ></button>
      <p
        className={
          task.completed === false
            ? "Task__text Task__text--uncompleted"
            : "Task__text Task__text--completed"
        }
      >
        {task.text}
      </p>
      <button type="button" className="Task__btn" onClick={handleRemove}>
        <img src={crossIcon} alt="" className="Task__btn__img"></img>
      </button>
    </div>
  );
};

export default Task;
