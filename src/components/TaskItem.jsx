import { useState } from "react";
import styles from "./TaskItem.module.css";
import { TrashIcon } from "@heroicons/react/24/outline";

const TaskItem = ({ task, deleteTask, updateTask }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    updateTask(task.id);
  };

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
        </label>
     
        <button
          className={`btn2 ${styles.delete}`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
