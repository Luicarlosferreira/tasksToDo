import { ContainerForm } from "./styles";
import { CgClose } from "react-icons/all";
import { useState } from "react";
import { UseTaskReducer } from "../../hooks/useTaskReducer";

export const ToDoList = () => {
  const { state, dispatch } = UseTaskReducer();
  const [form, setForm] = useState(false);
  const handleSetForm = () => setForm(false);
  const [task, setTask] = useState("");
  const [taskName, setTaskName] = useState("");
  const totalTasks = state.length;
  //date
  const current = new Date();
  const dateVar = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const formHandleSubmit = (e) => {
    e.preventDefault();
    setTask("");
    setTaskName("");
    const tasks = {
      id: Math.random(),
      tName: taskName,
      taskDesc: task,
      date: dateVar,
    };

    if (task.length > 1 && taskName.length > 1) {
      dispatch({ type: "ADD", payload: tasks });
      handleSetForm();
    }
  };
  console.log(state);
  return (
    <ContainerForm>
      <h1>
        My All Tasks{" "}
        {totalTasks > 0 ? (
          <span style={{ color: "gray" }}>({totalTasks})</span>
        ) : null}
      </h1>
      <button className="plusTask" onClick={() => setForm(true)}>
        + New Task
      </button>
      {form ? (
        <div className="formContent">
          <form onSubmit={formHandleSubmit}>
            <input
              className="inputForm"
              type="text"
              value={taskName}
              placeholder="Task name..."
              required
              onChange={(e) => setTaskName(e.target.value)}
            />

            <input
              className="inputForm"
              type="text"
              value={task}
              required
              placeholder="Task description..."
              onChange={(e) => setTask(e.target.value)}
            />

            <button>Set Task</button>
          </form>
          <CgClose onClick={handleSetForm} />
        </div>
      ) : (
        ""
      )}
    </ContainerForm>
  );
};
