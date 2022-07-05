import axios from "axios";
import { useState } from "react";
import { Sorting } from "../Sorting/index";
import TaskItem from "./TaskItem";

const url = 'http://localhost:4003/task';

export function TaskList({taskList}: any) { 

  const [sort, setSort] = useState([]);
  // const addSort = ({target}: any) => setSort(target.value); 

  const editTask = async (id: any, editedTask: any) => {
    try {
      await axios.put(`${url}/${id}`, editedTask)
      } catch (error) {
      console.log(error)
      }
  }

  const deleteTask = async (id: any) => await axios.delete(`${url}/${id}`);

  const todosList = taskList
   && [...taskList]
  //  .sort((a: any, b: any) => a[sort] > b[sort] ? 1 : -1)
   .map((task: any, i: number)=> (
    <TaskItem
      editTask={editTask}
      deleteTask={deleteTask}
      key={i}
      id={task.id}
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
      {todosList && <Sorting {...{sort, setSort}}/>}
      <ul>{todosList && todosList}</ul>
    </>
  );
}
