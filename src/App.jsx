import { useState } from "react";
import { CustomForm } from "./components/CustomForm";

function App() {
  const [count, setCount] = useState(0);

  const addTask = (task) => {
    console.log(task);
  }

  return (
    <div className="Container">
      <header>
        <h1>To-Do List</h1>
      </header>
      <CustomForm addTask={addTask } />
    </div>
  );
}

export default App;
