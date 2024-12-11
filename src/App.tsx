import "./App.css";
import { v1 } from "uuid";
import { TodoList } from "./TodoList";


function App() {

  const tasksOne = [
    { id: v1(), title: 'HTML', isDone: true},
    { id: v1(), title: 'CSS', isDone: true},
    { id: v1(), title: 'JS', isDone: true},
    { id: v1(), title: 'React', isDone: false},
  ];

  const tasksTwo = [
    { id: v1(), title: 'Уборка', isDone: true},
    { id: v1(), title: 'Готовка', isDone: false},
    { id: v1(), title: 'Искупаться', isDone: false},
    { id: v1(), title: 'Учиться', isDone: true},
  ]

  return (
    <div className="App">
      <TodoList title="What to learn"
      tasks={tasksOne}
      />
      <TodoList title="Приезд Димы"
      tasks={tasksTwo}
      />
    </div>
    
  );
}

export default App;
