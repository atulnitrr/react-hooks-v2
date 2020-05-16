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
    setTasks([...tasks, taskTitle]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
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
          return <div key={uuid()}> {task}</div>;
        })}
      </div>
    </div>
  );
}

export default Task;
