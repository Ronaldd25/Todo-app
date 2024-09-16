import { useState } from "react";

import { CreateTaskForm } from "./components/CreateTaskForm";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export interface TaskType {
  id: string;
  text: string;
  done: boolean;
}

function App() {
  const [task, setTask] = useState<TaskType[]>([]);

  return (
    <>
      <Header />
      <CreateTaskForm setState={setTask} />
      <Main setState={setTask} task={task} />
    </>
  );
}

export default App;
