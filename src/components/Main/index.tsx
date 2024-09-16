import { Dispatch, SetStateAction } from "react";
import { Task } from "../Task";
import styles from "./main.module.css";
import { TaskType } from "../../App";
import { ClipboardIcon } from "../ClipboardIcon";

interface MainProps {
  task: TaskType[];
  setState: Dispatch<SetStateAction<TaskType[]>>;
}

export const Main = ({ task, setState }: MainProps) => {
  const taskDone = task.filter((t) => t.done === true);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <strong>
          Tarefas criadas <span>{task.length}</span>
        </strong>
        <strong>
          Concluidas <span>{taskDone.length + " de " + task.length}</span>
        </strong>
      </header>

      <div className={styles.content}>
        {task[0] ? (
          <ul>
            {task.map((t) => (
              <Task
                key={t.id}
                id={t.id}
                done={t.done}
                text={t.text}
                setState={setState}
                task={task}
              />
            ))}
          </ul>
        ) : (
          <div className={styles.empty}>
            <ClipboardIcon />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </main>
  );
};
