import axios from "axios";
import TaskItem from "./TaskItem";

const url = 'http://localhost:4003/task';

export function TaskList({ taskList}: any) { 

  const editTask = async (id: any, editedTask: any) => {
    try {
      await axios.put(`${url}/${id}`, editedTask)
      } catch (error) {
      console.log(error)
      }
  }

  const deleteTask = async (id: any) => await axios.delete(`${url}/${id}`)

  const todosList = taskList.map((task: any)=> (
    <TaskItem
      editTask={editTask}
      deleteTask={deleteTask}
      key={task.id}
      id={task.id}
      title={task.name}
      content={task.content}
      taskUser={task.TaskUser[0]}
      taskList={taskList}
    />
  ));

  return (
    <>
      <h3>Lista de Tarefas</h3>
      <ul>{todosList}</ul>
    </>
  );
}
