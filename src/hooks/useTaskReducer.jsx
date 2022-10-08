import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

export const UseTaskReducer = () => {
  const context = useContext(TaskContext);

  if (!context) {
    console.log("There's a context Error. Please Consult the Error log.");
  }

  return context;
};
