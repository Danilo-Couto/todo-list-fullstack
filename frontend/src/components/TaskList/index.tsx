import axios from "axios";
import TaskItem from "./TaskItem";

const url = 'http://localhost:4003/task';

export function TaskList({ 
  taskList, title, setTitle,
  content, setContent,
  owner, setOwner}: any) { 
    
  const editTask = async (id: any, newTask: any) => {
    try {
      await axios.put(`${url}/${id}`, newTask)
      } catch (error) {
      console.log(error) //tratar erro
      } finally {
        setTitle(''); 
        setContent('');
        setOwner(undefined);
      }
  }

  const deleteTask = async (id: any) => {
    try {
      await axios.delete(`${url}/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  const todosList = taskList.map((task: any)=> (
    <TaskItem
      update={editTask}
      delete={deleteTask}
      key={task.id}
      id={task.id}
      title={title}
      content={content}
      id_user={task.id_user}
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
