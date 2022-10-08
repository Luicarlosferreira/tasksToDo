import { createContext, useReducer, useEffect } from "react";

export const TaskContext = createContext();
const getStorage = () => {
  const storage = localStorage.getItem("tasks");
  if (storage) {
    return JSON.parse(localStorage.getItem("tasks"));
  } else return [];
};

export const TaskProviderContext = ({ children }) => {
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const addTask = state.filter((item) => item.id === action.payload.id);
        if (addTask.length > 1) {
          return state;
        } else return [...state, action.payload];

      case "REMOVE":
        const removeTask = state.filter(
          (item) => item.id !== action.payload.id
        );
        return removeTask;

      case "CLEAR":
        const clear = [];
        return clear;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(taskReducer, getStorage());
  useEffect(() => {
    if (state) {
      window.localStorage.setItem("tasks", JSON.stringify(state));
    }
  }, [state]);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
