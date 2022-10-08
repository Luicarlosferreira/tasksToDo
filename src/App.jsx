import "./App.css";
import { Header } from "./components/header/index";
import { MainPage } from "./pages/main";
import { TaskProviderContext } from "./context/taskContext";
function App() {
  return (
    <TaskProviderContext>
      <div className="App">
        <Header />
        <MainPage />
      </div>
    </TaskProviderContext>
  );
}

export default App;
