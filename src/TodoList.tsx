import { useState } from "react"
import { FilterType } from "./App"

type TasksType = {
  id: string
  title: string
  isDone: boolean
}


type PropsType = {
  title: string
  tasks: Array<TasksType>
  removeTask:(id: string) => void
  filterResult:(value: FilterType) => void
  addTask: ( title: string ) => void;
}
export const TodoList = ( props:PropsType ) => {
  const [ newTask, setnewtask ] = useState("");

  const inputValue = (value: string) => {
    setnewtask(value);
  }

  return (
    <div>
      <h3>{ props.title }</h3>
      <div>
        <input 
        value={newTask}
        />
        <button onClick={() => {props.addTask( newTask )}}>+</button>
      </div>
      <div>
        <ul>
          { props.tasks.map((t) => {
            return <li id={t.id}><input type="checkbox" checked={ t.isDone }/><span>{ t.title }</span>
            <button onClick={() => props.removeTask(t.id)}>x</button>
            </li>
          })}
        </ul>
      </div>
      <div>
        <button onClick={() => {props.filterResult("all")}}>All</button>
        <button onClick={() => {props.filterResult("active")}}>Active</button>
        <button onClick={() => {props.filterResult("complited")}}>Complited</button>
      </div>
    </div>
  );
};

//1 +вывести две тудушки с разными тасками
//2 +удаление тасок, +фильтрация все активные и неактивные, +метод map для тасок
//3 выводить добавленную таску