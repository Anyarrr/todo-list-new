import "./App.css";
import { v1 } from "uuid";
import { TodoList } from "./TodoList";
import { useState } from "react";

export type FilterType = "all" | "active" | "complited";

function App() {

  const [task, setTask] = useState([
    { id: v1(), title: 'HTML', isDone: true},
    { id: v1(), title: 'CSS', isDone: true},
    { id: v1(), title: 'JS', isDone: true},
    { id: v1(), title: 'React', isDone: false},
  ]);

  const [ filter, setFilter ] = useState<FilterType>('all');

  const removeTask = (id: string) => {
    const newTodoList = task.filter(t => t.id !== id);
    setTask(newTodoList);
  }

  let filterTasks = task;
  if(filter === "complited"){
    filterTasks = task.filter((t) => t.isDone === true);
  }
  if( filter === 'active'){
    filterTasks = task.filter((t) => t.isDone === false);
  }

  const filterResult = (value:FilterType) => {
    setFilter(value)
  }

  return (
    <div className="App">
      <TodoList title="What to learn"
      tasks={filterTasks}
      removeTask={removeTask}
      filterResult={filterResult}
      />
    </div>
    
  );
}

export default App;
