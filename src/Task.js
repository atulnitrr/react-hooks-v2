import React, { useState } from "react";
import { uuid } from "uuidv4";

function Task() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [doneTask, setDoneTask] = useState([]);

  const handleTaskTitle = (e) => {
    const value = e.target.value;
    setTaskTitle(value);
  };

  const handleAddTask = (e) => {
    setTasks([...tasks, { taskTitle, id: uuid() }]);
    setTaskTitle("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const completeTask = (task) => () => {
    setDoneTask([...doneTask, task]);
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const deleteTask = (task) => () => {
    setDoneTask(doneTask.filter((t) => t.id !== task.id));
  };

  return (
    <div>
      <h3>Tasks</h3>
      <div className="form">
        <input
          type="text"
          value={taskTitle}
          onChange={handleTaskTitle}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddTask}>Add task</button>
      </div>

      <div className="task-list">
        {tasks.map((task) => {
          return (
            <div key={task.id} onClick={completeTask(task)}>
              {task.taskTitle}
            </div>
          );
        })}
      </div>
      <div className="completed-list">
        {doneTask.map((task) => {
          const { id, taskTitle } = task;
          return (
            <div key={id}>
              {taskTitle}{" "}
              <span onClick={deleteTask(task)} className="delete-task">
                X
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Task;
