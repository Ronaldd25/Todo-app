import { PlusIcon } from "../PlusIcon";
import styles from "./createTaskForm.module.css";
import { TaskType } from "../../App";
import {
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import { v4 as createId } from "uuid";

interface CreateTaskFormProps {
  setState: Dispatch<SetStateAction<TaskType[]>>;
}

export const CreateTaskForm = ({ setState }: CreateTaskFormProps) => {
  const [value, setValue] = useState("");

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setState((prev) => {
      return [...prev, { id: createId(), text: value, done: false }];
    });

    setValue("");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={value}
        onChange={onChange}
      />
      <button>
        <strong>Criar</strong>
        <PlusIcon />
      </button>
    </form>
  );
};
