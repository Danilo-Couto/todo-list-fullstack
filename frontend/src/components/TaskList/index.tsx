import axios from "axios";
import TaskItem from "./TaskItem";

const url = 'http://localhost:4003/task';

export function TaskList({ 
  taskList, title, setTitle,
  content, setContent,
  owner, setOwner}: any) { 

  const editTask = async (id: any, newTask: any) => {
    console.log('editar')
    // try {
    //   await axios.put(`${url}/${id}`, newTask)
    //   } catch (error) {
    //   console.log(error) //tratar erro
    //   } finally {
    //     setTitle(''); 
    //     setContent('');
    //     setOwner(undefined);
    //   }
  }

  const deleteTask = async (id: any) => {
    console.log('editar')
      // await axios.delete(`${url}/${id}`)
  }
  const todosList = taskList.map((task: any)=> (
    <TaskItem
      editTask={editTask}
      deleteTask={deleteTask}
      key={task.id}
      id={task.id}
      title={task.name}
      content={task.content}
      owner={task.TaskUser}
    />
  ));

  return (
    <>
    <h3>Lista de Tarefas</h3>
    <ul>{todosList}</ul>
    </>
  );
}
