import { Container } from "./styles";
import { ToDoList } from "../components/toDoForm";
import { FcCalendar, BiTrash } from "react-icons/all";
import { UseTaskReducer } from "../hooks/useTaskReducer";
import { useState } from "react";

export const MainPage = () => {
  const { state, dispatch } = UseTaskReducer();
  const [activeConfirm, setActiveConfirm] = useState(false);

  return (
    <Container>
      <div className="topInfo">
        <h1>Here you can list your tasks and manage your routine</h1>
        <p>Enjoy, dear consumer.</p>
      </div>
      <div className="toDoContent">
        <ToDoList />
      </div>

      <div className="toDoElements">
        {state &&
          state.map((item) => {
            return (
              <div className="element" key={item.id}>
                <div className="info">
                  <h3>{item.tName}</h3>
                  <BiTrash onClick={() => setActiveConfirm(true)} />
                </div>
                <div className="taskDesc">
                  <p>{item.taskDesc}</p>
                </div>
                <div className="taskData">
                  <FcCalendar /> <span>{item.date}</span>
                </div>
                {activeConfirm && (
                  <div className="confirmDelete">
                    <h1> Do you really want to delete this task?</h1>
                    <div>
                      <button
                        onClick={() =>
                          dispatch(
                            { type: "REMOVE", payload: item },
                            setActiveConfirm(false)
                          )
                        }
                      >
                        Yes
                      </button>
                      <button onClick={() => setActiveConfirm(false)}>
                        No
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      {state.length > 1 ? (
        <button
          onClick={() => dispatch({ type: "CLEAR" })}
          className="clearAll"
        >
          Clear all tasks
        </button>
      ) : (
        ""
      )}
    </Container>
  );
};
