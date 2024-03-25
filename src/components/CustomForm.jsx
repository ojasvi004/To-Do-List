import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const CustomForm = ({addTask}) => {
  const [task, setTask] = useState("");
  

  const handleFormSubmit = (e) => {
      e.preventDefault();
      addTask({
          name: task,
          checked: false,
          id: Date.now()
      });
      setTask("");
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <span>
          <input
            type="text"
            placeholder="Enter Task"
            id="task"
            className="input"
            
            required
            maxLength={60}
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <label htmlFor="task" className="label">
          </label>
        </span>
        <button className="btn" type="submit">
          <PlusIcon style={{ color: "gainsboro" }} className="h-6 w-6" />
        </button>
      </div>
    </form>
  );
};