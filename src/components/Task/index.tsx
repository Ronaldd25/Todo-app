import styles from "./task.module.css";
import { TaskType } from "../../App";
import { Dispatch, SetStateAction } from "react";

interface TaskProps extends TaskType {
  task: TaskType[];
  setState: Dispatch<SetStateAction<TaskType[]>>;
}

export const Task = ({ id, text, done, setState, task }: TaskProps) => {
  const onClick = () => {
    const taskFiltered = task.filter((t) => t.id !== id);
    setState(taskFiltered);
  };

  const onCheck = () => {
    const taskDone = task.map((t) => {
      if (t.id === id) {
        return { ...t, done: !done };
      }
      return t;
    });

    setState(taskDone);
  };

  return (
    <li className={styles.task}>
      <div>
        <label>
          <input type="checkbox" />
          <div
            tabIndex={0}
            className={styles.inputCheck}
            onClick={onCheck}
          ></div>
        </label>
      </div>
      <p className={done ? styles.done : ""}>{text}</p>
      <button onClick={onClick}></button>
    </li>
  );
};
