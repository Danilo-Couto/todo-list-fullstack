import axios from "axios";
import { useState } from "react";
import { Sorting } from "../Sorting/index";
import TaskItem from "./TaskItem";

const url = 'http://localhost:4003/task';

export function TaskList({taskList}: any) { 
  const editTask = async (id: any, editedTask: any) => {
    try {
      await axios.put(`${url}/${id}`, editedTask)
      } catch (error) {
      console.log(error)
      }
  }

  // console.log(taskList && taskList)
  
  const deleteTask = async (id: any) => await axios.delete(`${url}/${id}`);

  const [sort, setSort] = useState([]);
  const addSort = ({target}: any) => setSort(target.value); 

  // console.log(sort)

  const todosList = taskList
   && [...taskList]
   .sort((a: any, b: any) => a.created > b.created ? 1 : -1)
   .map((task: any, i: number)=> (
    <TaskItem
      editTask={editTask}
      deleteTask={deleteTask}
      key={task.i}
      id={i}
      title={task.name}
      content={task.content}
      createdAt={task.created_at}
      owner={task.User.name}
      status={task.status}
      taskList={taskList}
    />
  ));

  return (
    <>
      {todosList && <Sorting {...{sort, addSort}}/>}
      <ul>{todosList && todosList}</ul>
    </>
  );
}
